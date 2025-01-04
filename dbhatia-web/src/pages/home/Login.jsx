import React from "react";

function Login() {
  return (
    <div className="bg-primary text-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Client / Staff Login</h2>
      <form className="space-y-2">
        <input
          type="text"
          placeholder="UserID"
          className="w-full p-2 rounded text-black"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded text-black"
        />
        <button
          type="submit"
          className="w-full bg-white text-primary rounded p-2 font-bold"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
