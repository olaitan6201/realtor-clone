import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';

function App() {
	return (
		<div>
			<ToastContainer
				position='bottom-center'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				pauseOnHover
				draggable
				theme='dark'
			/>
			<Header />
			<Routes>
				<Route
					path='/'
					element={<Home />}
				/>
				<Route
					path='/sign-in'
					element={<SignIn />}
				/>
				<Route
					path='/sign-up'
					element={<SignUp />}
				/>
				<Route
					path='/profile'
					element={<PrivateRoute />}
				>
					<Route
						path='/profile'
						element={<Profile />}
					/>
				</Route>
				<Route
					path='/create-listing'
					element={<PrivateRoute />}
				>
					<Route
						path='/create-listing'
						element={<CreateListing />}
					/>
				</Route>
				<Route
					path='/forgot-password'
					element={<ForgotPassword />}
				/>
				<Route
					path='/offers'
					element={<Offers />}
				/>
			</Routes>
		</div>
	);
}

export default App;
