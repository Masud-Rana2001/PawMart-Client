import { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Field from '../components/Field';
import FieldSet from '../components/FieldSet';
import AuthContext from './../contexts/AuthContext';
import { toast } from 'react-toastify';

function SignIn() {
  
  const [showPassword, setShowPassword] = useState(false);
  const {currentUser, loginWithEmail, signInWithGoogle, handleForgotPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentUser) {
      
      const email = e.target.email.value;
      const password = e.target.password.value;
      loginWithEmail(email, password);
      navigate(`${location.state ? location.state : '/'}`);
    } else {
      toast.error("Already Sign In. Please logout first");
      return
    }
  };

  const handleGoogleLogin = () => {
    if (!currentUser) {

      signInWithGoogle();
      navigate(`${location.state ? location.state : '/'}`);
    }else {
      toast.error("Already Sign In. Please logout first");
      return
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen 
      bg-gradient-to-r from-sky-200 via-cyan-300 to-sky-400 
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors py-10 duration-300"
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md 
          bg-white/50 dark:bg-gray-900/80 
          rounded-2xl shadow-2xl p-4 md:p-8 backdrop-blur-md 
          border border-gray-200 dark:border-gray-700 
          transition-all duration-300"
      >
        <FieldSet  label="👋 Welcome! Please Login">
          {/* Email Field */}
          <Field label="Email :" htmlFor="email">
            <input
              required
              id="email"
              type="email"
              name="email"
              ref={emailRef}
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border rounded-lg 
                border-emerald-300 dark:border-emerald-700 
                bg-white/80 dark:bg-emerald-900/30 
                text-emerald-900 dark:text-emerald-100 
                placeholder-emerald-400 dark:placeholder-emerald-500
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 
                transition-all"
            />
          </Field>

          {/* Password Field */}
          <Field label="Password :" htmlFor="password" showPassword={showPassword} setShowPassword={setShowPassword} isPassword={true}>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="******"
              id="password"
              className="w-full px-4 py-2 border rounded-lg 
                border-emerald-300 dark:border-emerald-700 
                bg-white/80 dark:bg-emerald-900/30 
                text-emerald-900 dark:text-emerald-100 
                placeholder-emerald-400 dark:placeholder-emerald-500
                focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 
                transition-all"
            />
          </Field>

          {/* Submit Button */}
          <Field>
            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-400 
                text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-emerald-400 
                transition-all duration-300"
            >
              Sign In
            </button>
          </Field>

          {/* Forget Password */}
          <p>
            <Link
              onClick={() => handleForgotPassword(emailRef.current.value)}
              className="text-emerald-600 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-100 hover:underline font-semibold"
            >
              Forget password?
            </Link>
          </p>

          {/* Sign Up */}
          <Field>
            <p className="text-emerald-800 dark:text-emerald-200 text-sm text-center">
              Don’t have an account?{" "}
              <Link
                to="/auth/signup"
                className="text-emerald-600 dark:text-emerald-300 hover:text-emerald-500 dark:hover:text-emerald-100 hover:underline font-semibold"
              >
                Sign Up
              </Link>
            </p>
          </Field>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="flex-grow h-px bg-emerald-300 dark:bg-emerald-700/50"></div>
            <span className="mx-3 text-emerald-500 dark:text-emerald-300 text-sm font-medium">or</span>
            <div className="flex-grow h-px bg-emerald-300 dark:bg-emerald-700/50"></div>
          </div>

          {/* Google Login */}
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full flex items-center justify-center gap-3 
              bg-white/90 dark:bg-emerald-900/30 
              hover:bg-gray-200 dark:hover:bg-emerald-700 
              text-emerald-900 dark:text-emerald-100 hover:text-emerald-600 dark:hover:text-emerald-50
              font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Sign In with Google
          </button>
        </FieldSet>
      </form>
    </div>
  );
}

export default SignIn;
