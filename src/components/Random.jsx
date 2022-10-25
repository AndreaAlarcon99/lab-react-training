function Random(props) {
    let random1 = Math.floor(Math.random() * props.max)
    // let random2 = Math.floor(Math.random() * props.max)

   
    
    return (
        <div id="random">
            <p>Random value between {props.min} and {props.max} = {random1}</p>
            <p>Random value between {props.min} and {props.max} = {random1 }</p>
        </div>
        
    )
}

export default Random