import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

function Dashboard(){
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
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