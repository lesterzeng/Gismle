import React from "react";

const SignIn = () => {
  return (
    <>
      <div className="selection:bg-sky-300 selection:text-white">
        <div className="flex justify-center items-center">
          <div className="p-8 flex-1">
            <div className="mx-auto overflow-hidden">
              <div className="p-8">
                <h1 className="text-5xl font-bold text-sky-500">
                  Welcome back!
                </h1>

                <form className="mt-12">
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                      placeholder="john@doe.com"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email address
                    </label>
                  </div>
                  <div className="mt-10 relative">
                    <input
                      id="password"
                      type="password"
                      name="password"
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-sky-500"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>

                  <button
                    type="button"
                    className="mt-20 px-8 py-4 uppercase rounded-full bg-sky-500 hover:bg-sky-300 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-sky-500 focus:ring-opacity-80 cursor-pointer"
                  >
                    Sign in
                  </button>
                </form>
                <a
                  href="#"
                  className="mt-4 block text-sm text-center font-medium text-sky-500 hover:underline focus:outline-none focus:ring-2 focus:ring-sky-300"
                >
                  {" "}
                  Forgot your password?{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
