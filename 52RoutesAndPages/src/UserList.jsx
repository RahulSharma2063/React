import { useEffect, useState } from 'react'
import UserAdd from './UserAdd';
import { useNavigate } from 'react-router';


function UserList() {

    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const url = "http://localhost:3000/users";

    useEffect(() => {
        setLoading(true)
        getUserData();
    }, [])

    const getUserData = async () => {
        let response = await fetch(url)
        response = await response.json();
        console.log(response);
        setUserData(response)
        setLoading(false)

    }

    const deleteUser = async (id) => {
        let response = await fetch(url + '/' + id, {
            method: 'DELETE'
        })
        response = await response.json

        if (response) {
            alert("Record deletes!")
            getUserData()
        }

    }

    const editUser=(id)=>{
        navigate(`/edit/${id}`)

    }

    return (
        <div>

            <div className="flex flex-col justify-center font-bold text-4xl text-blue-500 space-y-6">


                <ul className='user-list'>
                    <li>Name</li>
                    <li>Age</li>
                    <li>Email</li>
                    <li>Action</li>
                </ul>

                {
                    !loading ?

                        userData.map((user, index) => (
                            <ul key={index} className='user-list'>
                                <li>{user.name}</li>
                                <li>{user.age}</li>
                                <li>{user.email}</li>

                                <div >
                                    <li className='mb-3'><button className='border border-gray-400 w-20 rounded-lg bg-gray-100 text-sm'
                                        onClick={() => deleteUser(user.id)} >Delete</button></li>
                                    <li><button className='border border-gray-400 w-20 rounded-lg bg-gray-100 text-sm'
                                        onClick={() => editUser(user.id)} >Edit</button></li>
                                </div>
                            </ul>
                        ))
                        : <h1 className='h-screen flex justify-center text-center '>Data Loading...</h1>
                }
            </div>
            <UserAdd></UserAdd>
        </div>
    )
}

export default UserList

