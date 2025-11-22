import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

export default function UsersDetails() {

    const paramData = useParams()
        console.log(paramData.id);
        

    
    return <div style={{ marginLeft: 20 }}>
        <h1>User Detail Page</h1>
        <h2>User id is : {paramData.id}</h2>
        <h3><Link to="/users">Back</Link></h3>
        
    </div>
}