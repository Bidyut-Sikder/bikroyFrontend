import React, { useState } from "react";
import InputComponent from "../components/layout/InputComponent";
import AdminStore from "../store/adminStore";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import UserStore from "../store/userStore";
import ValidationHelper from "../utility/validation";



import { useForm } from "react-hook-form";

const UserForm = () => {
  //    const { isFormSubmit } = AdminStore()
  const navigate = useNavigate();
  const { userSignUpRequest, isFormSubmit } = UserStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await userSignUpRequest(data);
    if (res) {
      toast.success("Login successfull.");
      // navigate('/user')
      location.replace("/user");
    } else {
      toast.error("Invalid credentials!");
    }

    // Handle form submission logic here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-xl w-full p-8 bg-white shadow-2xl rounded-2xl border border-gray-200">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Signup Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block text-lg font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              type="text"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block text-lg font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              type="text"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-lg font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="block text-lg font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              type="tel"
              placeholder="Enter your phone number"
              defaultValue="017******"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-2">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-lg font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-2 mt-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
              type="password"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="border py-2 px-8 bg-yellow-500 text-red font-semibold text-lg rounded-xl hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition duration-300"
            >
              Submit
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-yellow-500 font-semibold hover:text-yellow-600"
              >
                Login here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
