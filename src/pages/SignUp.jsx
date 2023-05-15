import { useState } from "react"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import OAuth from "../components/OAuth"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth, db } from "../firebase/config"
import { doc, serverTimestamp, setDoc } from "firebase/firestore"
import { toast } from "react-toastify"

export default function SignUp() {
    const dataDOM = {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    }
    const [formData, setFormData] = useState(dataDOM)
    const [formErrors, setFormErrors] = useState(dataDOM)

    const { name, email, password, password_confirmation } = formData
    const {
        name: name_err, email: email_err,
        password: password_err,
        password_confirmation: password_confirmation_err
    } = formErrors

    const navigate = useNavigate()

    const validateFields = () => {
        const fieldValues = { ...formData }
        for (const field in fieldValues) {
            if (fieldValues[field]?.trim().length === 0) {
                return setFormErrors((prevState) => ({
                    ...prevState,
                    [field]: 'This field is required'
                }))
            }
        }

        if (password.trim() !== password_confirmation.trim()) {
            return setFormErrors((prevState) => ({
                ...prevState,
                password_confirmation: 'Password confirmation failed'
            }))
        }

        return true;
    }

    const handleInput = (e) => {
        const { id, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }))
        setFormErrors((prevState) => ({
            ...prevState,
            [id]: ''
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (validateFields() !== true) return;
        try {
            const { email, password } = formData
            const userCredential = await createUserWithEmailAndPassword(auth, email, password)
            updateProfile(auth.currentUser, {
                displayName: name
            })
            const user = userCredential.user

            const formDataCopy = { ...formData }
            delete formDataCopy.password
            delete formDataCopy.password_confirmation
            formDataCopy.timestamp = serverTimestamp()

            await setDoc(doc(db, "users", user.uid), formDataCopy)
            toast.success("Sign Up successful!")
            navigate('/')
        } catch (error) {
            // return console.log(error);
            let { message } = error
            message = message.replace('Firebase:', '')
            message = message.replace('auth/', '')
            toast.error(message)
        }
    }

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-extrabold">Sign Up</h1>

            <div className="flex justify-center items-center flex-wrap px-6 py-12 max-w-6xl mx-auto">
                <div className="hidden md:inline-block md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
                    <img
                        src="/key_logo.avif"
                        alt="key"
                        className="w-full rounded-2xl "
                    />
                </div>
                <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
                    <form onSubmit={handleSubmit}>
                        <Input
                            type="text" id="name"
                            value={name}
                            event={handleInput}
                            placeholder="Your name"
                            error={name_err}
                        />
                        <Input
                            type="email" id="email"
                            value={email}
                            event={handleInput}
                            placeholder="Email address"
                            error={email_err}
                        />
                        <Input
                            id="password"
                            value={password}
                            event={handleInput}
                            isPassword
                            error={password_err}
                        />
                        <Input
                            id="password_confirmation"
                            value={password_confirmation}
                            event={handleInput}
                            isPassword
                            error={password_confirmation_err}
                        />
                        <div className="my-3 flex justify-between whitespace-nowrap text-sm sm:text-md">
                            <p>Already have an account?
                                <Link to={'/sign-in'} className="text-red-600 hover:text-red-700 auth-link pl-2">Sign In</Link>
                            </p>
                            <Link to={'/forgot-password'} className="text-blue-600 hover:text-blue-700 auth-link pl-2">Forgot Password?</Link>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
                        >Sign Up</button>
                    </form>
                    <div className="my-4 items-center flex before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                        <p className="text-center font-semibold mx-4 ">OR</p>
                    </div>
                    <OAuth />
                </div>
            </div>
        </section>
    )
}
