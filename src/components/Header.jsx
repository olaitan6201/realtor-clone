import { useLocation, useNavigate } from "react-router"
import PageRoute from "./PageRoute"
import { useEffect, useState } from "react"
import { auth } from "../firebase/config"
import { onAuthStateChanged } from "firebase/auth"

export default function Header() {
    const location = useLocation()
    const navigate = useNavigate()
    const [pageState, setPageState] = useState({ title: 'Sign In', url: '/sign-in' })
    const pageRoutes = [
        {
            title: "Home",
            url: '/',
            alt: []
        },
        {
            title: "Offers",
            url: '/offers',
            alt: []
        },
        {
            title: pageState.title,
            url: pageState.url,
            alt: [
                '/sign-in',
                '/sign-up',
                '/profile',
                'forgot-password'
            ]
        }
    ]

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPageState({ title: 'Profile', url: '/profile' })
            } else {
                setPageState({ title: 'Sign In', url: '/sign-in' })
            }
        })
    }, [])
    
    return (
        <header className="bg-white border-b shadow-sm sticky top-0 z-40">
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
                            <PageRoute
                                key={i} route={r}
                                location={location}
                            />
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}
