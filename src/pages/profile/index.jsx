import React, { useContext, useEffect } from "react"
import { fetchUser, findUsers } from "../../api/UserApi";
import { AuthContext } from "../../App"
import NavBar from "../../components/LayoutComponents/NavBar";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import ProfileSideNav from "../../components/Profile/ProfileSideNav";


export default function Profile() {
    const loggedInUser = useContext(AuthContext);
    const {userId, role} = loggedInUser;
    const [user, setUser] = React.useState([]);

    useEffect(() => {
        getUser();
    }, [userId]);
    
      const getUser = () => {
        findUsers(`id=${userId}`)
          .then(res => {
            if(res.data.isSuccessful) {
                let userData = res.data.responseData;
                for (var valueObj = 0; valueObj < userData?.length; valueObj++) {
                    if (userData[valueObj]._id === userId) {
                        console.log(userData[valueObj]);
                        setUser(userData[valueObj]);
                    }
                }
            } else {
                console.error("error");
            }
          })
          .catch(() => console.log("couldn't fetch"));
      }

    return (
        <>
            <NavBar />
            <div>
                <ProfileSideNav />
                <ProfileDetails user={user}/>
            </div>
        </>
    );
}