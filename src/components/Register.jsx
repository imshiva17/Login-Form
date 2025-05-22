import React, { useContext, useState } from "react";
import { useForm, useFormState } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import { usercontext } from "../Context/UserContext";

import { IoPersonSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Register = () => {
  const { toggler, setToggler, users, setUsers } = useContext(usercontext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    setUsers([...users, data]);
    toast.success("User created successfully!");
    reset();
  };

  return (
    <form
      onClick={handleSubmit(submitHandler)}
      className="bg-transparent border-2 border-gray-400 backdrop-blur-md shadow-2xl py-5 px-8 rounded-xl text-white"
    >
      <h1 className="text-3xl font-bold text-white text-center ">
        Registration
      </h1>

      <span className="flex justify-between items-center relative">
        <input
          className="border-2 border-gray-400 outline-0 rounded-3xl py-1.5 px-5 mt-7 w-full font-thin text-xl cursor-pointer"
          type="text"
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
          className="border-2 border-gray-400 outline-0 rounded-3xl py-1.5 px-5 mt-7 w-full font-thin text-xl cursor-pointer"
          type="email"
          placeholder="Email"
          {...register("email", {
            required: true,
          })}
        />
        <MdEmail className="absolute right-3 top-10 " />
      </span>
      {errors.email ? (
        <p className="text-sm text-red-600 ml-5">Email is required</p>
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
        <p className="text-sm text-red-600 ml-5">Alleast 6 characters required</p>
      ) : (
        " "
      )}

      <span className="flex justify-between items-center text-sm mt-3 ">
        <label>
          <input type="checkbox" /> I agree to the terms & conditions
        </label>
      </span>
      <button
        className="border-2 border-white bg-white outline-0 active:scale-[0.95] rounded-3xl text-black py-1.5 px-5 mt-5 w-full font-bold text-xl cursor-pointer"
        type="submit"
      >
        Register
      </button>
      <br />
      <p className="text-sm mt-2 text-center">
        Already have an account?{" "}
        <button
          className="font-bold cursor-pointer text-blue-700"
          type="button"
          onClick={() => setToggler(!toggler)}
        >
          Login
        </button>
      </p>
    </form>
  );
};

export default Register;
