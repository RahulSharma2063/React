import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router"

function UserEdit(){
    const {id} = useParams();

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')
    const url = "http://localhost:3000/users/"+id;
    const navigate  = useNavigate();
    
    
    useEffect(()=>{
        getUserData()
    },[])

    const getUserData= async()=>{
        

        let response = await fetch(url);
        response = await response.json();
        
        console.log(response);

        setName(response.name);
        setAge(response.age);
        setEmail(response.email);
    }
    
    const UpdateUserData=async()=>{
        console.log(name,age,email);
        let response = await fetch(url, {
            method: 'Put',
            body:JSON.stringify({name,age,email})
        });
        response = await response.json();
        console.log(response);

        if(response){
            alert("User data updated")
            navigate('/')
        }
        
        
    }

    return(
        <div className="flex flex-col items-center min-h-screen w-full">
            <h1 className="flex justify-center font-bold items-center text-4xl mb-6">Edit User Details</h1>
            <input className="border border-gray-400 px-3 py-2 rounded-lg" value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="user name"/>
            <br /> <br />
            
            <input className="border border-gray-400 px-3 py-2 rounded-lg" value={age} onChange={(event) => setAge(event.target.value)} type="text" placeholder="user age"/>
            <br /> <br />

            <input className="border border-gray-400 px-3 py-2 rounded-lg" value={email} onChange={(event) => setEmail(event.target.value)} type="text " placeholder="user email."/>
            <br /> <br />
            <button onClick={UpdateUserData} className="border border-blue-200 bg-blue-500 hover:bg-blue-600 font-bold w-35 px-3 py-2 rounded-lg "
            >Update user</button>
        </div>
    )
}

export default UserEdit