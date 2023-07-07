import { userData } from '../Redux/userSlice'
import { useSelector } from "react-redux";

export const useAuth = () => {
    const dataSlice = useSelector(userData);
    const token = dataSlice?.credentials?.token;
    const role = dataSlice?.data?.role
    return {token, role}
}