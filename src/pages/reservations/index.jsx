import { useContext } from "react"
import { AuthContext } from "../../App"


export default function Reservations() {
    const loggedInUser = useContext(AuthContext);
    const {userId, role} = loggedInUser;

    return (
        <>
            <h1>Reservations</h1>
            <h2>logged in user - {userId}</h2>
            <h2>logged in user's role - {role}</h2>
        </>
    )
}