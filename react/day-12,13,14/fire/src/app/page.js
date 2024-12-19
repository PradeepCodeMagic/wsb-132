"use client"
import Image from "next/image";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./FireConfig"
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  let myRouter = useRouter()

  let loginWithGoogle = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        myRouter.push("/home")

      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.customData.email;

        const credential = GoogleAuthProvider.credentialFromError(error);

      });
  }


  // loginForm
  let loginForm = (e) => {
    e.preventDefault()

    let userObj = {
      email: e.target.Uemail.value,
      password: e.target.Upassword.value,
    }
    signInWithEmailAndPassword(auth, userObj.email, userObj.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        myRouter.push("/home")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode , errorMessage)
      });
  }

  return (
    <>

      <section className="flex flex-col md:flex-row h-screen items-center">

        <div className="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img src="https://images.unsplash.com/photo-1444313431167-e7921088a9d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1441&q=100" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

          <div className="w-full h-100">

            <h1 className="text-xl font-bold">Abstract UI</h1>

            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

            <form className="mt-6" action="#" onSubmit={loginForm} >
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input type="email" name="Uemail" id="" placeholder="Enter Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" name="Upassword" id="" placeholder="Enter Password" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
              </div>

              <div className="text-right mt-2">
                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
              </div>

              <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Log In</button>
            </form>

            <hr className="my-6 border-gray-300 w-full" />

            <button onClick={loginWithGoogle} type="button" className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
              <div className="flex items-center justify-center">

                <span className="ml-4">
                  Log in
                  with
                  Google</span>
              </div>
            </button>

            <p className="mt-8">Need an account?
              <Link href={"/register"} className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                account</Link>
            </p>

            <p className="text-sm text-gray-500 mt-12">&copy; 2020 Abstract UI - All Rights Reserved.</p>
          </div>
        </div>

      </section>
    </>
  );
}
