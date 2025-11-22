function Wrapper({ children, color="blue"}) {
    return (
        <div style={{ color: color, border: "5px solid green", width: "300px", justifyContent: "center", alignItems: "center", display: "flex", margin: "10px",flexDirection: "column"}}>
            {children}
        </div>
    )
}

export default Wrapper;