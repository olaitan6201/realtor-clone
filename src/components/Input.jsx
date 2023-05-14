import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export default function Input({
    event, Icon = '', isPassword = false, 
    error = '', ...props
}) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="relative my-3">
            {isPassword && (
                <input
                    type={showPassword ? 'text' : 'password'}
                    onChange={event}
                    placeholder="••••••"
                    className="w-full input flex-1"
                    {...props}
                />
            )}
            {isPassword && (showPassword ?
                <AiOutlineEyeInvisible className="text-xl cursor-pointer absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)} />
                :
                <AiOutlineEye className="text-xl cursor-pointer absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)} />
            )}

            {!isPassword && (
                <input
                    onChange={event}
                    className="w-full input flex-1"
                    {...props}
                />
            )}
            {!isPassword && Icon && <Icon className="text-xl cursor-pointer absolute right-3 top-3" />}
            {error && <small className="text-red-500">{error}</small>}
        </div>
    )
}
