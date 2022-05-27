import "../css/Card.css";

function Card(props){
    const handleClick = () =>{
        window.open(props.url);
    }
    return(
        <div className="card">
            <div className="cardBody">
                <img className="image" src={props.img}/>
                <h3 className="date"> {props.date}</h3>
                <h2 className="cardTitle">{props.title}</h2>
                <p className="cardInfo">{props.info}</p>
            </div>
        <button className="cardButton" onClick={handleClick}>Article</button>
        </div>
    )

}
export default Card;