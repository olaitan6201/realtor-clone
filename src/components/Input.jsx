import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"

export default function Input({
    type = 'text', id = '', value = '',
    event, placeholder = '', Icon = '',
    isPassword = false, error = ''
}) {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="relative my-3">
            {isPassword && (
                <input
                    type={showPassword ? 'text' : 'password'} id={id}
                    value={value}
                    onChange={event}
                    placeholder="••••••"
                    className="w-full input flex-1"
                />
            )}
            {isPassword && (showPassword ?
                <AiOutlineEyeInvisible className="text-xl cursor-pointer absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)} />
                :
                <AiOutlineEye className="text-xl cursor-pointer absolute right-3 top-3" onClick={() => setShowPassword(!showPassword)} />
            )}

            {!isPassword && (
                <input
                    type={type} id={id}
                    value={value}
                    onChange={event}
                    placeholder={placeholder}
                    className="w-full input flex-1"
                />
            )}
            {!isPassword && Icon && <Icon className="text-xl cursor-pointer absolute right-3 top-3" />}
            {error && <small className="text-red-500">{error}</small>}
        </div>
    )
}
