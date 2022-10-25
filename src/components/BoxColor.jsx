function BoxColor(props) {
    const { r, g, b } = props

    const boxStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width: "80vw",
        height: "10vh",
        margin: "auto",
        border: "1px black solid",
        textAlign: "center",
        padding: "10px"

    }
    return (
        <div style={boxStyle}>
            {r}{g}{b}
        </div>
    )
}

export default BoxColor