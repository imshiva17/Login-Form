import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { usercontext } from "../Context/UserContext";

import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const Login = () => {
  const { toggler, setToggler, users, setUsers } = useContext(usercontext);
  // console.log(users);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    // console.log(data);

    const findUser = users.find((user) => {
      return user.username === data.username && user.password === data.password;
    });
    console.log(findUser);
    if (findUser) {
      toast.success("User already exists!");
    } else {
      toast.error("User not found!");
    }
    reset();
  };

  return (
    <form
      onClick={handleSubmit(submitHandler)}
      className="bg-transparent border-2 border-gray-400 backdrop-blur-md shadow-2xl py-5 px-8 rounded-xl text-white"
    >
      <h1 className="text-3xl font-bold text-white text-center ">Login</h1>

      <span className="flex justify-between items-center relative">
        <input
          className="border-2 border-gray-400 outline-0 rounded-3xl py-1.5 px-5 mt-7 w-full font-thin text-xl cursor-pointer"
          type="email"
          placeholder="Username"
          {...register("username", {
            required: true,
          })}
        />
        <IoPersonSharp className="absolute right-3 top-10 " />
      </span>
      {errors.username ? (
        <p className="text-sm text-red-600 ml-5">Username is required</p>
      ) : (
        " "
      )}

      <span className="flex justify-between items-center relative">
        <input
          className="border-2 border-gray-400 outline-0 rounded-3xl py-1.5 px-5 mt-6 w-full font-thin text-xl cursor-pointer"
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 6,
          })}
        />
        <FaLock className="absolute right-3 top-10 " />
      </span>
      {errors.password ? (
        <p className="text-sm text-red-600 ml-5">Password is required</p>
      ) : (
        " "
      )}
      {errors.password?.type === "minLength" ? (
        <p className="text-sm text-red-600 ml-5">
          Alleast 6 characters required
        </p>
      ) : (
        ""
      )}

      <span className="flex justify-between items-center text-sm mt-3 ">
        <label>
          <input type="checkbox" /> Remember me
        </label>
        <h2>Forget password?</h2>
      </span>
      <button
        className="border-2 border-white bg-white outline-0 active:scale-[0.95] rounded-3xl text-black py-1.5 px-5 mt-5 w-full font-bold text-xl cursor-pointer"
        type="submit"
      >
        Login
      </button>
      <br />
      <p className="text-sm mt-2 text-center">
        Don't have an account?{" "}
        <button
          className="font-bold cursor-pointer text-blue-700"
          type="button"
          onClick={() => setToggler(!toggler)}
        >
          Register
        </button>
      </p>
    </form>
  );
};

export default Login;
