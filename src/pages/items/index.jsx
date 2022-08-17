import { useEffect } from "react";
import { useContext } from "react"
import { AuthContext } from "../../App"
import NavBar from "../../components/LayoutComponents/NavBar";
import itemRequest from "../../api/Item/item.request";

export default function Items() {
    // With this AuthContext you can get the currently logged in user's details
    const loggedInUser = useContext(AuthContext);
    const {userId, role} = loggedInUser;

    useEffect(() => {
        itemRequest.getItems().then((res) => {
          console.log("Item page: Index: useEffect")
          console.log(res);
        });
      }, []);

    return (
        <>
        <NavBar />
            <h1>Items</h1>
            <h2>logged in user - {userId}</h2>
            <h2>logged in user's role - {role}</h2>
        </>
    )
}