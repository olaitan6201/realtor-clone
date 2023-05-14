import { useState } from 'react'
import Input from '../components/Input'
import { auth, db } from '../firebase/config'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { updateProfile } from 'firebase/auth'
import { doc, updateDoc } from 'firebase/firestore'

export default function ProfileForm() {
    const { currentUser } = auth

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: currentUser?.displayName,
        email: currentUser?.email
    })
    const [updateEnabled, setUpdateEnabled] = useState(false)

    const { email, name } = formData

    const onLogOut = () => {
        auth.signOut()

        toast.success('Sign out successful!')

        navigate('/')
    }

    const handleInput = (e) => {
        const { id, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmit = async () => {
        try {
            if (currentUser.displayName !== name) {
                await updateProfile(currentUser, {
                    displayName: name
                })

                const docRef = doc(db, 'users', currentUser.uid)
                await updateDoc(docRef, { name })

                return toast.success('Profile updated successfully!')
            }
            return toast.info('No update found!')
        } catch (error) {
            toast.error('Unable to update profile details!')
        }
    }

    const handleUpdate = async () => {
        if (updateEnabled) await handleSubmit()
        setUpdateEnabled((prevState) => !prevState)
    }

    return (
        <form>
            <div className="my-3">
                <Input
                    event={handleInput}
                    readOnly={!updateEnabled}
                    type='text' id='name'
                    value={name}
                    extraClass={`${updateEnabled && "bg-red-200 focus:bg-red-200 focus:ring-0"}`}
                />
            </div>
            <div className="my-3">
                <Input
                    readOnly type='email'
                    id='email' value={email}
                />
            </div>
            <div className="flex justify-between items-center whitespace-nowrap text-sm sm:text-lg space-y-3">
                <p className='flex items-center space-x-2'>
                    <span>Do you want to change your name?</span>
                    <span className='text-red-600 cursor-pointer hover:text-red-800 transition duration-200 ease-in-out' onClick={handleUpdate}>
                        {updateEnabled ? "Apply change" : "Edit"}
                    </span>
                </p>
                <p onClick={onLogOut} className='text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200 ease-in-out'>Sign Out</p>
            </div>
        </form>
    )
}
