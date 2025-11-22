function User({displayName, name, getUser}){

    
    return(
        <div>
            <button onClick={()=> displayName(name)}>Display User</button>
            <button onClick={()=> getUser()}>Get User</button>
        </div>
    )
}

export default User