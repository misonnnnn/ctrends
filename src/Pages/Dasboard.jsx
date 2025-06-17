import { Navigate } from "react-router-dom";
import { logout } from "../utils/authService";

function Dashboard(){
    const handleLogout = async () => {
        await logout();
        Navigate('/login');
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <p>this is a test</p>            

            <div>
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )

}

export default Dashboard