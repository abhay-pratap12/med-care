import React, { useEffect, useRef, useState } from "react";
// import leaflet from "../utils/img/leafletlogo.png";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../utils/firebase";
// import { validate } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { addUserName, adduserId } from "../utils/UserSlice";
// import { addProfilePic, addUserDetails, addUserName, addUserNamedocId, adduserId } from "../utils/userSlice";

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch()

  const [valid, setValid] = useState("");
  const [err, setErr] = useState(null);

  const navigate = useNavigate();
  const signhandler = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSign = () => {
    // const validation = validate(email.current.value, password.current.value);
    // setValid(validation);
    // console.log(valid);

    // if (valid != null) return;

    isSignIn
      ? signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((r) => console.log('hello user'))
          .catch((e) => setErr(e.message))
      : createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then(async (r) => {
            console.log('hello user');
            updateProfile(auth.currentUser, {
              displayName: name.current.value
            })
            .then((r)=>console.log(r))
            .catch((e)=>console.log(e))
            // console.log(docRef.id)
          })
          .catch((e) => setErr(e.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log('user',user);
        dispatch(addUserName(user.displayName))
        // dispatch(addProfilePic(user.photoURL))
        dispatch(adduserId(user.uid))
        navigate("/home");
      } else {
        console.log("log out");
        navigate("/");
      }
    });
  }, []);

  return (
    <div>
      <section>
        <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
          <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md w-3/6">
            <div class="mb-2 flex justify-center">
              {/* <img className="w-[90px]" src={leaflet} /> */}
            </div>
            <h2 class="text-center text-2xl font-bold leading-tight text-black">
              {isSignIn ? "Sign in to your account" : "Create a free account"}
            </h2>
            {isSignIn ? (
              <p class="mt-2 text-center text-sm text-gray-600 ">
                Don&#x27;t have an account?{" "}
                <a
                  onClick={signhandler}
                  title=""
                  class="font-semibold text-black transition-all duration-200 hover:underline cursor-pointer"
                >
                  Create a free account
                </a>
              </p>
            ) : (
              <p class="mt-2 text-center text-sm text-gray-600 ">
                Already have an account?{" "}
                <a
                  onClick={signhandler}
                  title=""
                  class="font-semibold text-black transition-all duration-200 hover:underline cursor-pointer"
                >
                  Sign in to your account
                </a>
              </p>
            )}
            <form class="mt-8" onSubmit={(e) => e.preventDefault}>
              <div class="space-y-5">
                {isSignIn ? (
                  <div></div>
                ) : (
                  <div>
                    <label for="" className="text-base font-medium text-gray-900">
                      {" "}
                      Enter your name{" "}
                    </label>
                    <div className="mt-2">
                      <input
                        ref={name}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                )}
                <div>
                  <label for="" className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                      ref={email}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label for="" className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      ref={password}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                {valid != null && <div className="text-red-400">{valid}</div>}
                <div className="text-red-400">{err}</div>
                <div>
                  <button
                    onClick={handleSign}
                    type="button"
                    class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                  >
                    Get started{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="ml-2"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div class="mt-3 space-y-3">
              <button
                type="button"
                class="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <span class="mr-2 inline-block">
                  <svg
                    class="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
