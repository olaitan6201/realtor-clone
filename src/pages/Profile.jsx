import { Link } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import { FcHome } from "react-icons/fc";

export default function Profile() {

	return (
		<section className='max-w-6xl mx-auto flex flex-col justify-center items-center'>
			<h1 className="text-3xl text-center mt-6 font-bold">My Profile</h1>
			<div className="w-full md:w-[50%] mt-6 px-3">
				<ProfileForm />

				<Link to={'/create-listing'} className="w-full bg-blue-600 hover:bg-blue-600 active:bg-blue-800 text-white uppercase px-7 py-3 text-sm font-medium rounded shadow-md transition duration-200 ease-in-out hover:shadow-lg flex justify-center items-center space-x-3">
					<FcHome className="text-3xl bg-red-200 rounded-full p-1 border-2" />
					<span>Sell or Rent your Home</span>
				</Link>
			</div>
		</section>
	)
}
