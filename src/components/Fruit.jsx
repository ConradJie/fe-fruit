import './Fruit.css';

function Fruit({id, title, fruitAmount, disabled, imgUrl, imgAlt, onClick}) {
    return (
        <div className="Fruit">
            <img src={imgUrl} alt={imgAlt}/>
            <h2>{title}</h2>
            <button
                type="button"
                id="subtract"
                name={id}
                disabled={disabled}
                className={fruitAmount > 0 ? "Green" : "White"}
                onClick={onClick}
            >-
            </button>
            <span>{fruitAmount}</span>
            <button
                type="button"
                id="add"
                name={id}
                className={fruitAmount > 0 ? "Green" : "White"}
                onClick={onClick}
            >+
            </button>
        </div>
    );
}

export default Fruit;