import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../utils/userSlice";

function Login() {
  const dispatch = useDispatch();
  const abc = useSelector((state) => state.user);
  console.log('Payank abc', abc)

  // State to manage input fields
  const [form, setForm] = useState({
    userId: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleClick = (e) => {
    e.preventDefault();
    console.log("Login button clicked", form);
    // Dispatch action with form data
    dispatch(addUser({ name: form.userId }));
  };

  return (
    <div className="bg-primary text-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Client / Staff Login</h2>
      <form className="space-y-2" onSubmit={handleClick}>
        <input
          type="text"
          name="userId"
          placeholder="UserID"
          className="w-full p-2 rounded text-black"
          value={form.userId}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 rounded text-black"
          value={form.password}
          onChange={handleChange}
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
