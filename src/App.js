import './App.css';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import ForgotPassword from './pages/ForgotPassword';
import Offers from './pages/Offers';
import Header from './components/Header';

function App() {
	return (
		<div>
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
					element={<Profile />}
				/>
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
