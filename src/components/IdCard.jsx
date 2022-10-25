function IdCard({user}) {
    const {lastName, firstName, gender, height, birth, picture} = user
    return (
        <div id="user">
            <img src={picture} alt="" />
            <div id="datosUser">
                <p><b>firstName:</b> {firstName}</p>
                <p><b>lastName:</b> {lastName}</p>
                <p><b>gender:</b> {gender}</p>
                <p><b>height:</b> {height}</p>
                <p><b>birthday:</b> {birth.toString().slice(0,16)}</p>
            </div>
        </div>
    )
}

export default IdCard