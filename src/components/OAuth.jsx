import { FcGoogle } from "react-icons/fc";

export default function OAuth() {
  return (
    <button className="flex space-x-4 items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition-all duration-200 active:shadow-lg ease-in-out rounded">
        <FcGoogle className="text-2xl bg-white rounded-full" />
        <span>Continue with Google</span>
    </button>
  )
}
