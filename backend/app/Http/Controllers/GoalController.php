<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;

/**
 * Recursively retrieves all descendants of a goal
 *
 * @param int $parentId The ID of the parent goal
 * @return array Array of Goal objects containing id, title, and parent_id
 */
function getDescendants($parentId)
{
    $descendants = [];

    $query = Goal::select('id', 'title', 'parent_id', 'completed_at', 'tags')->where('parent_id', '=', $parentId)->orderBy('title', 'ASC');
    $goals = $query->get();

    foreach ($goals as $row) {
        $descendants[] = $row;
        $descendants = array_merge($descendants, getDescendants($row['id']));
    }
    return $descendants;
}

/**
 * Controller for managing Goal resources
 *
 * Handles CRUD operations and specialized queries for Goal entities,
 * including tree structure operations and location-based queries
 */
class GoalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return Illuminate\Pagination\LengthAwarePaginator\ response status data
     */
    public function index(Request $request)
    {
        $searchPage = $request->input('page');
        $pageSize = $request->input('pageSize')
            ? (int)$request->input('pageSize')
            : 20;  // DEFAULT page size

        $locationsWithoutCoords = $request->input('locationsWithoutCoords');
        if ($locationsWithoutCoords == 'true') {
            $query = Goal::where(function($q) {
                $q->where('gps_coords', '')
                  ->orWhereNull('gps_coords');
            });
            $query = $query->where('type', 0);
            $query = $query->with('parent');
            $query = $query->withCount('children');
            $query = $query->orderBy('title', 'ASC');
            // echo $query->toSql();
            // $bindings = $query->getBindings();
            // dd($query->toSql(), $bindings);
            $children = $query->get();


            return [
                "primary" => [],
                "children" => ["data" => $children, "total" => count($children)],
                "meta" => (object) [
                    "locationsWithoutCoords" => true
                ],
            ];
        }

        $idParam = $request->input('id');
        if ($idParam != '') {
            $query = Goal::where('id', $idParam)->with('parent');
            $query = $query->withCount('children');
            $goal = $query->get();

            $query2 = Goal::where('parent_id', '=', $idParam)->with('parent');
            $query2 = $query2->withCount('children');
            $query2 = $query2->orderBy('title', 'ASC');
            $children = $query2->paginate($pageSize, ['*'], 'page', $searchPage);

            return [
                "primary" => $goal,
                "children" => $children,
                "meta" => (object) [
                    "id" => $idParam
                ],
            ];
        }

        $searchTitle =  $request->input('search_title');
        $searchTags = $request->input('tags') == "<untagged>"
            ? ""
            : '%' . $request->input('tags') . '%';
        $searchType = $request->input('type') == "-1"
            ? ""
            : $request->input('type');

        $priorityParam = $request->input('priority');
        $searchPriority = $priorityParam && is_numeric($priorityParam)
            ? $priorityParam
            : -2;
        $priorityOperand = $priorityParam && is_numeric($priorityParam)
            ? '='
            : '!=';
        $searchParentId = $request->input('parent_id') !== null
            ? $request->input('parent_id')
            : "";

        $orderByParam = $request->input('order_by');

        switch ($orderByParam) {
            case 'title-asc':
                $orderByField = 'title';
                $orderByDirection = 'ASC';
                break;
            case 'title-desc':
                $orderByField = 'title';
                $orderByDirection = 'DESC';
                break;
            case 'priority':
                $orderByField = 'priority';
                $orderByDirection = 'ASC';
                $priorityOperand = '>=';
                $searchPriority = $priorityParam;
                break;
            case 'updated-at-asc':
                $orderByField = 'updated_at';
                $orderByDirection = 'ASC';
                break;
            case 'updated-at-desc':
                $orderByField = 'updated_at';
                $orderByDirection = 'DESC';
                break;
            default:
                $orderByField = 'title';
                $orderByDirection = 'ASC';
        }

        $query = Goal::with('parent');
        $query = $query->withCount('children');

        if ($searchTitle !== '') {
            $query = $query->where('title', 'LIKE', '%' . $searchTitle . '%');
        }

        if ($searchType !== '') {
            $query = $query->where('type', $searchType);
        }

        if ($searchTags !== '') {
            $query = $query->where('tags', 'LIKE', $searchTags);
        }

        if ($searchPriority > -2) {
            $query = $query->where('priority', $priorityOperand, $searchPriority);
        }
        if ($searchParentId >= -1) {
            $query = $query->where('parent_id', $searchParentId);
        }

        $completedGoals = $request->input('completedGoals');
        if ($completedGoals == 'true') {
            $query = $query->whereNotNull('completed_at');
            $orderByField = 'completed_at';
            $orderByDirection = 'DESC';
            $pageSize = 100;
        }
        $incompleted = $request->input('incompleted');
        if ($incompleted == 'true') {
            $query = $query->whereNull('completed_at');
        }
        $query = $query->orderBy($orderByField, $orderByDirection);
        $goals = $query->paginate($pageSize, ['*'], 'page', $searchPage);

        // echo $query->toSql();
        // $bindings = $query->getBindings();
        // dd($query->toSql(), $bindings);
        // $goals = $query->get();
        // ->paginate($pageSize);

        // echo $query->toSql();

        return [
            "primary" => [],
            "children" => $goals,
            "meta" => (object) [
                "searchTitle" => $searchTitle,
                "tags" => $searchTags,
                "type" => $searchType,
                "priority" => $searchPriority >= 0 ? $searchPriority : 0,
                "orderByField" => $orderByField,
                "parentId" => $searchParentId,
                "pageSize" => $pageSize,
                "searchPage" => $searchPage,
            ],
        ];
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array response status data
     */
    public function store(Request $request)
    {
        // see https://stackoverflow.com/questions/44001030/laravel-validate-json-object
        $formData = json_decode($request->getContent());

        $goal = Goal::create((array)$formData);
        $goal->update();
        $goal->load('parent');
        // echo $request->all();
        return [
            "data" => $goal
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Goal  $Goal
     * @return array response status data
     */
    public function show(int $id)
    {
        $query = Goal::with('parent')->where('id', $id);
        $goal = $query->get();

        return [
            "data" => $goal
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id Id of Goal
     * @return array response status data
     */
    public function update(Request $request, int $id): array
    {
        $formData = json_decode($request->getContent());
        $goal = Goal::find($id);
        $goal->title = $formData->title;
        $priority = $formData->priority == ""
            ? -1
            : $formData->priority;
        $goal->priority = $priority;
        $goal->reason = $formData->reason;
        $goal->type = $formData->type;
        $goal->note = $formData->note;
        $goal->tags = $formData->tags;
        $addedAt = $formData->addedAt == ""
            ? date("Y-m-d")
            : $formData->addedAt;
        $goal->added_at = $addedAt;
        $goal->parent_id = $formData->parentId;
        $goal->gps_coords = $formData->gpsCoords;
        $goal->gps_zoom = $formData->gpsZoom;
        $goal->completed_at = trim($formData->completedAt) !== '' ? $formData->completedAt : null;

        $goal->update();

        return [
            "data" => $goal,
            "msg" => "Goal updated"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Goal  $goal
     * @return array response status data
     */
    public function destroy(int $id): array
    {
        Goal::where('id', $id)->delete();
        return [
            "data" => $id,
            "msg" => "Goal deleted"
        ];
    }

    /**
     * Update timeframe for the specified goal
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int $id Id of Goal
     * @return array response status data
     */
    public function updateTimeframe(Request $request, int $id): array
    {
        $formData = json_decode($request->getContent());
        $goal = Goal::find($id);

        if (isset($formData->start_timeframe)) {
            $goal->start_timeframe = $formData->start_timeframe;
        }

        if (isset($formData->end_timeframe)) {
            $goal->end_timeframe = $formData->end_timeframe;
        }

        $goal->update();

        return [
            "data" => $goal,
            "msg" => "Timeframe updated"
        ];
    }

    /**
     * tree of goals query
     *
     * @param  number  $id
     * @return array response status data
     */
    public function treeInfo(int $id): array
    {
        $allDescendants = getDescendants($id);

        return [
            "data" => $allDescendants,
            "msg" => ""
        ];
    }
}
