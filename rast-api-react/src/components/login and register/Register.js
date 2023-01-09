import React from "react";
import { useContext } from "react";
import SkillContext from "../../context/SkillContext";



const Register = () => {
  const { storeLoginHandler, onchangeLoginHandler,loginvalue, errors } = useContext(SkillContext);
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up to get new account
          </h2>
        </div>
        <form onSubmit={storeLoginHandler} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div >
              <label htmlFor="name1" className="sr-only">
                Name
              </label>
              <input
                id="name1"
                name="name"
                value={ loginvalue["name"]}
                onChange={onchangeLoginHandler}
                type="text"
                autoComplete="name"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Full Name"
              />
              {errors.name && (
                <span className=" text-sm text-red-600">{errors.name[0]}</span>
              )}
            </div>
            <div className=" mt-2">
              <label htmlFor="username" className="sr-only">
                UserName
              </label>
              <input
             
                onChange={onchangeLoginHandler}
                id="username"
                name="username"
                value={loginvalue["username"]}
                type="text"
                autoComplete="username"
                required
                className="relative block w-full mt-3 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="UserName"
              />
              {errors.username && (
                <span className=" text-sm text-red-600">
                  {errors.username[0]}
                </span>
              )}
            </div>
            <div className=" mt-2">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                
                onChange={onchangeLoginHandler}
                id="email-address"
                name="email"
                value={loginvalue["email"]}
                type="email"
                autoComplete="email"
                required
                className="relative block w-full mt-3 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
              {errors.email && (
                <span className=" text-sm text-red-600">{errors.email[0]}</span>
              )}
            </div>
            <div className=" mt-2">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                value={loginvalue["password"]}
                onChange={onchangeLoginHandler}
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="relative block w-full mt-3 appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
              {errors.password && (
                <span className=" text-sm text-red-600">
                  {errors.password[0]}
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {" "}
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
