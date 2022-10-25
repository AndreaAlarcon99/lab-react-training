function Greetings(props) {
    let helloText = "";

    if (props.lang === "de") {
        helloText = "Hallo"
    } else if (props.lang === "fr") {
        helloText = "Bonjour"
    } else if (props.lang === "es") {
        helloText = "Hola"
    } else if (props.lang === "en") {
        helloText = "Hello"
    }
    
    return (
        <div id="lang">
            <p>{helloText + " " + props.children}</p>
        </div>
    )
}

export default Greetings