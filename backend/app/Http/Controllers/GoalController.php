<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;

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
        // $pageSize = is_numeric($request->input('per_page'))
        //     ? $request->input('per_page')
        //     : 20;  // DEFAULT page size

        $searchTitle =  $request->input('search_title');
        // $searchTitle = $request->input('starts_with')
        //     ? $request->input('starts_with') . '%'
        //     : $searchTitle;
        $searchTags = $request->input('tags') == "<untagged>"
            ? ""
            : '%' . $request->input('tags') . '%';
        $searchType = $request->input('type') == "<untagged>"
            ? ""
            : $request->input('type');
        $priorityParam = $request->input('priority');
        $searchPriority = $priorityParam && is_numeric($priorityParam)
            ? $priorityParam
            : -2;
        $priorityOperand = $priorityParam && is_numeric($priorityParam)
            ? '='
            : '!=';
        // $parentIdParam = $searchType && is_numeric($searchType) && $searchType == "0" & $request->input('parent_id')
        //     ? $request->input('parent_id')
        //     : '';

        $parentIdParam = $request->input('parent_id');
        $orderByParam = $request->input('order_by');

        switch ($orderByParam) {
            case 'title':
                $orderByField = 'title';
                $orderByValue = 'ASC';
                break;
            case 'priority':
                $orderByField = 'priority';
                $orderByValue = 'ASC';
                $priorityOperand = '>=';
                $searchPriority = $priorityParam;
                break;
            case 'updated-at-asc':
                $orderByField = 'updated_at';
                $orderByValue = 'ASC';
                break;
            default:
                $orderByField = 'updated_at';
                $orderByValue = 'DESC';
        }

        $query = Goal::where('type', '=', $searchType)
            ->where('priority', $priorityOperand, $searchPriority);

        if ($searchTitle && $searchTitle !== '') {
            $query = $query->where('title', 'LIKE', '%' . $searchTitle . '%');
        }
        if ($searchTags !== '') {
            $query = $query->where('tags', 'LIKE', $searchTags);
        }
        if ($parentIdParam != '') {
            $query = $query->where('parent_id', '=', $parentIdParam);
        }

        $query = $query->orderBy($orderByField, $orderByValue);
        // echo $query->toSql();
        // $bindings = $query->getBindings();
        // dd($query->toSql(), $bindings);
        $goals = $query->get();
        // ->paginate($pageSize);

        // echo $query->toSql();

        return [
            "meta" => (object) [
                "last_page" => 1,
                "current_page" => 1,
                "total" => -1,
                "searchTitle" => $searchTitle,
                "tags" => $searchTags,
                "type" => $searchType,
                "priority" => $searchPriority,
                "parent_id" => $parentIdParam,
                "orderByField" => $orderByField

            ],
            "goals" => $goals
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
        $goal->priority = 1;
        $goal->tags = "";
        $goal->update();
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

        $query = Goal::where('id', $id);
        $goal = $query->get();
        // ->paginate($pageSize);

        return $goal;
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

        $goal->update();

        return [
            "status" => 1,
            "data" => $goal,
            "msg" => "Goal updated successfully"
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
            "msg" => "Goal deleted successfully"
        ];
    }
}
