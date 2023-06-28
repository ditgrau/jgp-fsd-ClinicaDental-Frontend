import { userData } from '../Redux/userSlice'
import { useSelector } from "react-redux";


export const Token = () => {
const dataSlice = useSelector(userData);
    const token = dataSlice?.credentials?.token
    return token
}


export const Role = () => {
    const dataSlice = useSelector(userData);
        const role = dataSlice?.data?.role
        return role
    }