import { useEffect } from "react";

const Counter = ({count, data}) =>{

    useEffect(()=>{
        console.log("Mounting");
        
    },[])
    
    useEffect(()=>{
        console.log("Update phase");
        
    },[count])
    useEffect(() => {
        return() => {
            console.log("unMount phase");
            
        }
    },[])



    return(
        <div>
            <h1>Counter Value {count}</h1>
            <h1>Data Value {data}</h1>
        </div>
    )
}

export default Counter;