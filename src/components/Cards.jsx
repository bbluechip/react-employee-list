import "../sass/Cards.scss";

const Cards = (props) => {
  return (
    <div className="card">
      <div className="left">
        <img src={props.image} />
      </div>

      <div className="right">
        <h4>{props.name}</h4>
        <p>{props.email}</p>
        <p>{props.age} years</p>
      </div>
    </div>
  );
};

export default Cards;
