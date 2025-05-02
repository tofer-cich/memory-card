function Card({ name, imgUrl }) {
    console.log("imgUrl: " + imgUrl);
    return (
        <div className="card">
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