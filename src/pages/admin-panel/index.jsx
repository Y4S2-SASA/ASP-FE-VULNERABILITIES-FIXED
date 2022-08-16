import { getLoggedUserRole } from "../../helper/helper";

export default function AdminHome() {
    return (
        <>
        {getLoggedUserRole === 'ADMIN' ? 
            <>
            </>
            :
            <></>    
        }
        </>
    );

}