<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\SkillCollection;
use App\Models\Skill;
use App\Models\User;
use Illuminate\Http\Request;

class RegisterController extends Controller
{

    public function index(Request $request){

        return User::all();


        // helper
//        Auth::login($user);    // Facades
    }
    public function store(Request  $request)
    {
//        var_dump(\request()->all());
//        return \request()->all();
        $request->validate([
            'name' => 'required|max:255',
            'username' => 'required|min:3|max:255|unique:users,username',
//            'username' => ['required','min:3','max:255', Rule::unique('users','username')],
            'email' => 'required|email|max:255|unique:users,email',
            'password' => 'required|min:7|max:255',

        ]);
        User::create($request->toArray());
        return response()->json("user created successfully");
//        $attributes = \request()->validate([
//            'name' => 'required|max:255',
//            'username' => 'required|min:3|max:255|unique:users,username',
////            'username' => ['required','min:3','max:255', Rule::unique('users','username')],
//            'email' => 'required|email|max:255|unique:users,email',
//            'password' => 'required|min:7|max:255',
////            'password' => ['required', 'min:7', 'max:255'],
//        ]);
//        dd($attributes['password']);
//        $attributes['password'] = bcrypt($attributes['password']);
//        User::create([
//            'name' => ucwords($attributes['name']),
//            'password' => bcrypt($attributes['password']),
//            'username' => $attributes['username'],
//            'email' => $attributes['email']
//        ]);
    }
}
