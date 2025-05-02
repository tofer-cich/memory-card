function Card({ id, name, imgUrl, handleClick }) {
    return (
        //use id here
        <div className="card" onClick={e => handleClick(id)}> 
            <div className="card-picture">
                <img src={imgUrl}></img>
            </div>
            <div className="card-name">
                <h2>{name}</h2>
            </div>
        </div>
    )
}

export default Card