import { useState } from 'react'
import Input from '../components/Input'
import { auth } from '../firebase/config'
export default function Profile() {
	const { currentUser } = auth

	const [formData, setFormData] = useState({
		name: currentUser?.displayName,
		email: currentUser?.email
	})

	const { email, name } = formData
	
	return (
		<section className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
			<h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
			<div className="w-full md:w-[50%] mt-6 px-3">
				<form>
					<div className="my-3">
						<Input readOnly type='text' id='name' value={name} />
					</div>
					<div className="my-3">
						<Input readOnly type='email' id='email' value={email} />
					</div>
					<div className="flex justify-between items-center whitespace-nowrap text-sm sm:text-lg space-y-3">
						<p className='flex items-center space-x-2'>
							<span>Do you want to change your name?</span>
							<span className='text-red-600 cursor-pointer hover:text-red-800 transition duration-200 ease-in-out'>Edit</span>
						</p>
						<p className='text-blue-600 hover:text-blue-800 cursor-pointer transition duration-200 ease-in-out'>Sign Out</p>
					</div>
				</form>
			</div>
		</section>
	)
}
