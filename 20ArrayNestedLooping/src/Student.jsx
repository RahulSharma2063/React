const Student = ({ students }) => {
    return (
        <div>
            <h3>Students</h3>
            {
                students.map((student, index) => (
                    <ul key={index}>
                        <li>Name: {student.name}</li>
                    </ul>
                ))
            }
        </div>
    )
}

export default Student;
