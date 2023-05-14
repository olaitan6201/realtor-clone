import { signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth, db, provider } from "../firebase/config";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

export default function OAuth() {
	const onSignInWithGoogle = async () => {
		try {
			const result = await signInWithPopup(auth, provider)
			const { user } = result

			// Check if user already exist
			const docRef = doc(db, "users", user.uid)
			const docSnap = await getDoc(docRef)
			if (docSnap.exists()) return toast.error('User already exist!')

			await setDoc(docRef, {
				name: user.displayName,
				email: user.email,
				timestamp: serverTimestamp()
			})
		} catch (error) {
			toast.error("Unable to authenticate with Google")
		}
	}
	return (
		<button type="button" className="flex space-x-4 items-center justify-center w-full bg-red-700 text-white px-7 py-3 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg transition-all duration-200 active:shadow-lg ease-in-out rounded" onClick={onSignInWithGoogle}>
			<FcGoogle className="text-2xl bg-white rounded-full" />
			<span>Continue with Google</span>
		</button>
	)
}
