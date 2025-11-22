const User = ({ data }) => {
    return (
        <div style={{border:'2px solid black', width:'300px', margin:'10px', padding:'10px', borderRadius:'10px'}}>
            <h3>Name: <span style={{color:'green'}}>{data.name}</span></h3>
            <h3>Age: <span style={{color:'green'}}>{data.age}</span></h3>
            <h3>Email: <span style={{color:'green'}}>{data.email}</span></h3>
            <h3>ID: <span style={{color:'green'}}>{data.id}</span></h3>
        </div>
    )
}

export default User
