<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SkillCollection;
use App\Http\Resources\SkillResource;
use App\Models\Skill;
use Illuminate\Http\Request;

class SkillController extends Controller
{
    public function index(){


        return new SkillCollection(Skill::all());
    }

    public function show(Skill $skill){
        return new SkillResource($skill);
    }
    public function store(Request $request){
        $request->validate([
            'name'=>'required || min:2 ||max:30 ',
            'slug'=>'required || unique:skills',
        ]);
        Skill::create($request->toArray());

        return response()->json("skill created successfully");
    }
    public function update(Request $request,Skill $skill){
        $request->validate([
            'name'=>'required || min:2 ||max:30 ',
            'slug'=>'required || unique:skills',
        ]);

        $skill->update((array)$request->post());
        return response()->json("skill updated successfully");
    }
    public function destroy(Skill $skill){
        $skill->delete();
        return response()->json('skills deleted');
    }

}
