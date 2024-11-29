<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(){
        $jobs = Job::orderBy("created_at", "desc");

        $jobs = $jobs->get();

        return response()->json([
            'status' => true,
            'data' => $jobs
        ]);
    }

    public function show($id){
        $job = Job::find($id);

        if($job === null){
            return response()->json([
                'status' => false,
                'message' => 'Id not found!'
            ]);
        }
        
        return response()->json([
            'status' => true,
            'data' => $job
        ]);
    }

    public function display($position, $contract = null, $location = null){
        $query = Job::where('position', "like", "%$position");
        
        if(!empty($location)){
            $query->where('location', $location);
        }

        if(!empty($contract)){
            $query->where('contract', $contract);
        }

        $jobs = $query->get();

        if ($jobs->isNotEmpty()) {
            return response()->json([
                'status' => true,
                'data' => $jobs
            ]);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'No jobs found'
            ]);
        }
    }

    public function filterByPosition($position){
        $jobs = Job::where('position', "like", "%". $position)->get();

        if($jobs){
            return response()->json([
                'status' => true,
                'data' => $jobs
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Not Found'
            ]);
        }
    }

    public function filterByLocation($location, $contract = null){
        $query = Job::where('location', $location);

        if(!empty($contract)){
            $query->where('contract', $contract);
        }

        $jobs = $query->get();

        if($jobs->isNotEmpty()){
            return response()->json([
                'status' => true,
                'data' => $jobs
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Not Found'
            ]);
        }
    }

    public function filterByPositionAndLocation($position, $location){
        $jobs = Job::where('position', "like", "%". $position)
                    ->where('location', $location)
                    ->get();

        if($jobs){
            return response()->json([
                'status' => true,
                'data' => $jobs
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Not Found'
            ]);
        }
    }

    public function filterByContract($contract){
        $jobs = Job::where('contract', $contract)->get();

        if($jobs){
            return response()->json([
                'status' => true,
                'data' => $jobs
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Not Found'
            ]);
        }
    }
}
