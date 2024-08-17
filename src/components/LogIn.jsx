import { Link } from "react-router-dom";

export default function LogIn() {
  return (
    <div className="flex justify-center items-center h-[100vh] bg-blue-100">

        <form className="p-2 h-[400px] w-[420px] bg-blue-400 rounded-lg" required>
            <div className="w-full mt-2 text-center">
                <p className="w-full text-xl  font-bold">Log-In</p>
            </div>
            <div className="ml-2">
                <label className="  ">
                    <h2 className="mt-1 mb-1 font-semibold font-sans text-xl" >Username</h2>
                </label>
                <input className=" h-[40px] w-[391px] border outline-none text-lg rounded-lg" type="text" required/>
            </div>
            
            <div className="ml-2">
                <label>
                <p className="mt-2 mb-1 font-semibold font-sans text-xl " >Password</p>
                </label>
                <input className=" h-[40px] w-[391px] border outline-none text-lg rounded-lg" required type="password" />
            </div>
            <div className="ml-2 w-[386px]">
            <Link to={"/products"}><button  className="bg-blue-900 w-full mt-4 h-[50px] rounded-lg text-white font-mono">Log-In</button></Link>
                <div className="w-full mt-2">
                    <p className="w-full text-center text-lg">Not signed-in yet? <Link to="/" className="font-mono font-semibold">Sign-In</Link></p>
                </div>
            </div>
        </form>
    </div>
  )
}
