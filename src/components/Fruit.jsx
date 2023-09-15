import './Fruit.css';

function Fruit({title,fruit,setFruit,imgUrl,imgAlt}) {
    return (
        <div className="Fruit">
            <img src={imgUrl} alt={imgAlt} />
            <h2>{title}</h2>
            <button
                type="button"
                disabled={fruit === 0}
                onClick={() => setFruit(fruit - 1)}
            >-</button>
            <span>{fruit}</span>
            <button
                type="button"
                onClick={() => setFruit(fruit + 1)}
            >+</button>
        </div>
    );
}

export default Fruit;