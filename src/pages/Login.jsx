import React from 'react'
import { githubLogo, googleLogo } from '../assets'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/cartReducer';
import { useNavigate } from 'react-router-dom';



function Login() {
  const userInfo = useSelector((state) => state.cart.userInfo)


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const auth = getAuth()
  const provider = new GoogleAuthProvider();

  const googleLogin = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider).then((result) => {
      const user = result.user
      dispatch(addUser({
        _id: user.uid,
        name: user.displayName,
        email: user.email,
        image: user.photoURL
      }))
      setTimeout(() => {
        navigate('/')
      }, 1500)
    })
      .catch(error => {
        console.log(error)
      })
  }

  const googleSignOut = () => {
    signOut(auth).then(() => {
      toast.success('Logged Out Succesfully')
      dispatch(removeUser())
    })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='w-full flex flex-col items-center justify-center gap-10 py-20'>
      <div className='w-full flex items-center justify-center gap-10 flex-col md:flex-row'>
        <div onClick={googleLogin} className=' text-base w-60 h-12 tracking-wide border-[1px] border-gray-500 rounded-md flex items-center justify-center gap-2 cursor-pointer'>
          <img className='w-8' src={googleLogo} alt="github" />
          <span >Sign in with Google</span>
        </div>
        {userInfo && <button onClick={googleSignOut} className='bg-black text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-900 duration-200'>Sign Out</button>}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  )
}

export default Login