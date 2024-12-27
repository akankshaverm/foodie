
import { signIn } from "@/auth"
import { FcGoogle } from "react-icons/fc"
 
export function Login() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    > 
      <button type="submit" className="bg-white text-red-500 m-9  flex border border-red-700 items-center  rounded-md text-center flex-1 px-3 py-2">
          
         <FcGoogle className=" mr-2 w-6 h-6"/>
        <span>Signin with Google</span>
        </button>
  </form>
  )
} 