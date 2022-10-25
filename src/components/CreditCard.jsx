function CreditCard({card}) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = card
    
    const cardStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        width: "30vw",
        borderRadius: "1em",
        margin: "auto",
        padding: "10px"
    }


    return (
        <div style={cardStyle}>
            <p>{type}</p>  
            <p>**** **** **** {number.slice(12,16)}</p>    
            <p>Expires {expirationMonth} / {expirationYear} {bank}</p>    
               
            <p>{owner}</p>    
        </div>
    )
}

export default CreditCard