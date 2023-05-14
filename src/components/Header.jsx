import { useLocation, useNavigate } from "react-router"
import PageRoute from "./PageRoute"

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const pageRoutes = [
        {
            title: "Home",
            url: '/',
            alt: ''
        },
        {
            title: "Offers",
            url: '/offers',
            alt: ''
        },
        {
            title: "Sign In",
            url: '/sign-in',
            alt: '/sign-up'
        }
    ]

    return (
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="flex justify-between items-center px-3 max-w-6xl mx-auto">
                <div className="cursor-pointer" onClick={() => navigate('/')}>
                    <img
                        src="/rdc-logo-default.svg"
                        alt="Realtor Logo"
                        className="h-5"
                    />
                </div>
                <div>
                    <ul className="flex space-x-10">
                        {pageRoutes?.map((r, i) =>
                            <PageRoute key={i} route={r} location={location} />
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}
