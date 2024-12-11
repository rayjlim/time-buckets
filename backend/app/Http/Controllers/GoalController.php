<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use stdClass;

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

        $searchTitle = '%' . $request->input('search_title') . '%';
        // $searchTitle = $request->input('starts_with')
        //     ? $request->input('starts_with') . '%'
        //     : $searchTitle;
        $searchTags = $request->input('tags') == "<untagged>"
            ? ""
            : '%' . $request->input('tags') . '%';
        $priorityParam = $request->input('priority');
        $priority = $priorityParam && is_numeric($priorityParam)
            ? $priorityParam
            : -2;
        $priorityOperand = $priorityParam && is_numeric($priorityParam)
            ? '='
            : '!=';

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
                $priority = $priorityParam;
                break;
            case 'updated-at-asc':
                $orderByField = 'updated_at';
                $orderByValue = 'ASC';
                break;
            default:
                $orderByField = 'updated_at';
                $orderByValue = 'DESC';
        }

        $query = Goal::where('title', 'LIKE', $searchTitle)
            ->where('tags', 'LIKE', $searchTags)
            ->orWhereNull('tags')
            ->where('priority', $priorityOperand, $priority)
            ->orWhereNull('priority')
            ->orderBy($orderByField, $orderByValue);
        // echo $query->toSql();
        // $bindings = $query->getBindings();
        // dd($query->toSql(), $bindings);
        $goals = $query->get();
        // ->paginate($pageSize);



        return [
            "meta" => (object) [
                "last_page" => 1,
                "current_page" => 1,
                "total" => -1
            ],
            "goals" => $goals
        ];
    }

    /**
     * Create the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
        $this->validate($request, [
            'title' => 'required',
        ]);

        $goal = Goal::create($request->all());
        // echo $request->all();
        return [
            "status" => 1,
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
        $goal->priority = $formData->priority;
        $goal->reason = $formData->reason;
        $goal->type = $formData->type;
        $goal->note = $formData->note;
        $goal->tags = $formData->tags;
        $goal->added_at = $formData->addedAt;

        $goal->update();

        return [
            "status" => 1,
            "data" => $goal,
            "msg" => "Game updated successfully"
        ];
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Goal  $game
     * @return array response status data
     */
    public function destroy(Goal $game): array
    {
        $game->delete();
        return [
            "status" => 1,
            "data" => $game,
            "msg" => "Goal deleted successfully"
        ];
    }
}
