import { Link } from "react-router-dom"

export default function Users() {
    const userData = [
        {
            id: 1, name: 'Anil'
        },
        {
            id: 2, name: 'Rahul'
        },
        {
            id: 3, name: 'Vipul'
        },
        {
            id: 4, name: 'Saurabh'
        },
        {
            id: 5, name: 'Harsh'
        },
    ]
    return <div style={{ marginLeft: 20 }}>
        <h1>User Page</h1>
        {
            userData.map((item) => (
                <div key={item.id}>
                    <h4><Link to={"/users/" + item.id}>{item.name}</Link></h4>
                </div>
            ))
        }

        <h1>User Page with name in URL</h1>
        {
            userData.map((item) => (
                <div key={item.id}>
                    <h4><Link to={"/users/" + item.id+"/" +item.name}>{item.name}</Link></h4>
                </div>
            ))
        }

    </div>
}