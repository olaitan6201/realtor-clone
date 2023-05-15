import { useState } from "react"
import Input from "../components/Input"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { sendPasswordResetEmail } from "firebase/auth"
import { auth } from "../firebase/config"

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [email_err, setEmailErr] = useState('')

    const navigate = useNavigate()

    const handleInput = (e) => {
        const { value } = e.target
        setEmail(value)
        setEmailErr('')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (email.trim().length === 0)
            return setEmailErr('This field is required')

        try {
            await sendPasswordResetEmail(auth, email)

            toast.success("Email sent successful!")

            navigate('/')
        } catch (error) {
            toast.error('Could not send reset password')
        }
    }

    return (
        <section>
            <h1 className="text-3xl text-center mt-6 font-extrabold">Forgot Password</h1>

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
                            type="email" id="email"
                            value={email}
                            event={handleInput}
                            placeholder="Email address"
                            error={email_err}
                        />
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-200 ease-in-out hover:shadow-lg active:bg-blue-800"
                        >Send reset password</button>
                        <div className="my-3 flex justify-between whitespace-nowrap text-sm sm:text-md">
                            <p>Don't have an account?
                                <Link to={'/sign-up'} className="text-red-600 hover:text-red-700 auth-link pl-2">Register</Link>
                            </p>
                            {/*<Link to={'/forgot-password'} className="text-blue-600 hover:text-blue-700 auth-link pl-2">Forgot Password?</Link>*/}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
