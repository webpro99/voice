<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\LoginUser;
use Illuminate\Support\Facades\Session;

class AuthController extends Controller
{
    public function login(Request $request)
{
    $requestData = $request->all();
    $emailColumnName = 'email';
    $passwordColumnName = 'password';

    $hashedPassword = md5($requestData['password']);

    $user = LoginUser::where($emailColumnName, $requestData['email'])
        ->where($passwordColumnName, $hashedPassword)
        ->first();

    if (!$user) {
        return response()->json(["success" => false, "message" => "Wrong Email or password!"], 401);
    }

    Session::put('userId', $user);
    Session::put('isLoggedIn', true);

     //dd(Session::get('userId'), Session::get('isLoggedIn'));

    return response([
        'user' => $user,
        'success' => 'true',
        'message' => 'Login successful'
    ], 200);
}

}
