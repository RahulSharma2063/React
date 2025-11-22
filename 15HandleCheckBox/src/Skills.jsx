import { useState } from "react"

function Skills() {
    const [Skills, setSkills] = useState([]);
    const handleSkiills = (event) => {
        if(event.target.checked){
            setSkills([...Skills, event.target.value])
        }
        else{
            setSkills([...Skills.filter((item) => item !== event.target.value)])
        }

    }
    return (
        <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", border: "2px solid gray", padding: "15px", width: "250px" }}>
                <h3>Select Your Skill</h3>
                <div>
                    <input onChange={handleSkiills} type="checkbox" id="php" value="php" />
                    <label htmlFor="php">PHP</label>
                </div>

                <div>
                    <input onChange={handleSkiills}  type="checkbox" id="js" value="js" />
                    <label htmlFor="js">JavaScript</label>
                </div>

                <div>
                    <input onChange={handleSkiills}  type="checkbox" id="java" value="java" />
                    <label htmlFor="java">JAVA</label>
                </div>

                <div>
                    <input onChange={handleSkiills}  type="checkbox" id="cpp" value="cpp" />
                    <label htmlFor="cpp">C++</label>
                </div>
            </div>

            <div style={{ fontSize:"12px", display: "flex", flexDirection: "column", gap: "10px", border: "2px solid gray", padding: "15px", width: "250px" }}>
                <h1>{Skills.join(", ")}</h1>
            </div>
        </div>



    )
}
export default Skills