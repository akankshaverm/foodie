
import { signOut } from "@/auth"
 
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut("google")
      }}
    >
      <button type="submit" className="bg-red-600 text-white px-3 py-2 rounded-xl">Sign Out</button>
    </form>
  )
} 