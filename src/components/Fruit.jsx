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
                onClick={onClick}
            >-
            </button>
            <span>{fruitAmount}</span>
            <button
                type="button"
                id="add"
                name={id}
                onClick={onClick}
            >+
            </button>
        </div>
    );
}

export default Fruit;