import { useState } from "react"

function UserAdd() {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [email, setEmail] = useState('')

    const createUser= async()=>{
        console.log(name, age, email);
        const url="http://localhost:3000/users";
        let response = await fetch(url,{
            method:'Post',
            body:JSON.stringify({name, age, email})
        });
        response = await response.json();
        if(response){
            alert("New user Added!")
        }
        
    }

    return (
        <div className="flex justify-center flex-col items-center min-h-screen bg-gray-100 ">
            <h1 className="font-bold text-5xl text-blue-500">Add New User</h1>

            <input className="border border-gray-400 px-3 py-2 rounded-lg mt-9" type="text "
                onChange={(event) => setName(event.target.value)} placeholder="enter name" />
            <br /> <br />

            <input className="border border-gray-400 px-3 py-2 rounded-lg" type="text "
                onChange={(event) => setAge(event.target.value)} placeholder="enter age" />
            <br /> <br />

            <input className="border border-gray-400 px-3 py-2 rounded-lg" type="text "
                onChange={(event) => setEmail(event.target.value)} placeholder="enter email" />
            <br /> <br />
            <button className="border border-blue-200 bg-blue-500 hover:bg-blue-600 font-bold w-35 px-3 py-2 rounded-lg "
            onClick={createUser}>Add user</button>
        </div>
    )
}

export default UserAdd