<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(Request $request){
        $jobs = Job::orderBy("created_at", "desc");

        if(!empty($request->keyword)){
            $jobs = $jobs->where("position","like","%".$request->keyword."%");
        }
        if(!empty($request->location)){
            $jobs = $jobs->where("location","like","%".$request->location."%");
        }
        if(!empty($request->search)){
            $jobs = $jobs->where("position","like","%".$request->location."%")->orWhere("location","like","%".$request->location."%");
        }

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

    public function display($position, $location, $contract){
        $jobs = Job::where('position', "like", "%". $position)
                    ->where('location', $location)
                    ->where('contract', $contract)
                    ->get();
        // $jobs = Job::where('title', $title, "and", 'location', $location, "and", 'contract', $contract)->get();

        if($jobs){
            return response()->json([
                'status' => true,
                'data' => $jobs
            ]);
        }
        else{
            return response()->json([
                'status' => false,
                'message' => 'Invalid'
            ]);
        }
    }
}
