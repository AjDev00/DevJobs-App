<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index(){
        $jobs = Job::all();

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
}
