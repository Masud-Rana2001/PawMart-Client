import {useContext,useState} from 'react';
import FieldSet from '../components/FieldSet';
import Field from '../components/Field';
import { Link,useNavigate,useLocation } from 'react-router';
import AuthContext from './../contexts/AuthContext';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [passwordErr,setPasswordErr] = useState(null)
  const [showPassword ,setShowPassword] = useState(false)
  const { signInWithGoogle, signUpWithEmail, currentUser } = useContext(AuthContext);
  

    const navigate = useNavigate();
  const location = useLocation();


   const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!currentUser) {
      const name = e.target.name.value
      const email = e.target.email.value
      const password = e.target.password.value
      const photo = e.target.photo.value;
      if (strongPasswordRegex.test(password)) {
        signUpWithEmail(email, password, name, photo)
        navigate(`${location.state ? location.state : '/'}`);
      } else {
        setPasswordErr("Password must contain uppercase, lowercase, and be at least 6 characters.")
      }
    }else {
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
           dark:from-sky-900 dark:via-sky-950 dark:to-cyan-950 transition-colors py-10 duration-300">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white/50 dark:bg-gray-900/80 rounded-2xl shadow-2xl p-4 md:p-8 backdrop-blur-md  border border-gray-200 dark:border-gray-700 transition-all duration-300">
        <FieldSet label="👋 Welcome! Please Registration">
          <Field label="Full name :" htmlFor="name">
            <input
              reqired
              id="name"
              type="text"
              name="name"
              placeholder="Joun Due"
              className="w-full px-4 py-2 border border-emerald-700/50 rounded-lg  dark:bg-emerald-900/30  bg-white/80 text-emerald-100 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
            />
          </Field>
          <Field label="Photo URL " htmlFor="photo">
            <input
              id="photo"
              type="text"
              name="photo"
              placeholder="photo URL here"
              className="w-full px-4 py-2 border bg-white/80  dark:bg-emerald-900/30  border-emerald-700/50 rounded-lg  text-emerald-100 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
            />
          </Field>
          <Field label="Email :" htmlFor="email">
            <input
              reqired
              id="email"
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 border bg-white/80  dark:bg-emerald-900/30  border-emerald-700/50 rounded-lg  text-emerald-100 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
            />
          </Field>

          <Field  label="Password :" htmlFor="password" showPassword={showPassword} setShowPassword={setShowPassword} isPassword={true} error={passwordErr}>

            <input
              reqired
              id='password'
              type= {`${showPassword ? "text" : "password" }`} 
              name="password"
              placeholder="******"
              className="w-full px-4 py-2 border bg-white/80 border-emerald-700/50 rounded-lg  dark:bg-emerald-900/30  text-emerald-100 placeholder-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition-all"
            />
          </Field>
          <Field>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg shadow-md hover:shadow-lg focus:ring-4 focus:ring-indigo-400 transition-all duration-300"
            >
              Register
            </button>
          </Field>
          {/* SignUp Text */}
                    <Field>
                      <p className="text-emerald-600 text-sm text-center">
                        Already have an account?{" "}
                        <Link
                          to="/auth/signin"
                          className="text-emerald-800 hover:text-emerald-300 hover:underline font-semibold"
                        >
                          Sign In
                        </Link>
                      </p>
                    </Field>
          
                    {/* OR Divider */}
                    <div className="flex items-center justify-center my-6">
                      <div className="flex-grow h-px bg-emerald-800/50"></div>
                      <span className="mx-3 text-emerald-800/80 text-sm font-medium">or</span>
                      <div className="flex-grow h-px bg-emerald-800/50"></div>
                    </div>
          
                    {/* Google Button */}
                    <button
                     onClick={handleGoogleLogin}
                      type="button"
                      className="w-full flex items-center justify-center gap-3 btn bg-white/10 hover:bg-gray-900 text-emerald-500 hover:text-emerald-300 font-semibold py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
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

export default SignUp;
