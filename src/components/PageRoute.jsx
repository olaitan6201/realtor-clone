import { useNavigate } from "react-router"

export default function PageRoute({ route, location }) {
    const { title, url, alt } = route
    const pathMatchRoute = (route) => route === location.pathname
    const navigate = useNavigate()
    return (
        <li className={`link ${(pathMatchRoute(url) || pathMatchRoute(alt)) ? "text-black border-b-red-500" : "text-gray-400 border-b-transparent"}`} key={url} onClick={() => navigate(url)}>{title}</li>
    )
}
