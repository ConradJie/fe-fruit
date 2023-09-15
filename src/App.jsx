import './App.css'
import {useState} from "react";
import Fruit from "./components/Fruit.jsx";

function App() {

    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        zipcode: '',
        freq: '',
        dayTime: '',
        remark: '',
        agreement: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    function handleFormChange(e) {
        const changedFieldName = e.target.name;
        const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        setFormState({
            ...formState,
            [changedFieldName]: newValue,

        });
    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Fruit
                title="Aardbeien"
                fruit={aardbeien}
                setFruit={setAardbeien}
                imgUrl="./public/aardbei.jpg"
                imgAlt="Aartbei"
            />
            <Fruit
                title="Bananen"
                fruit={bananen}
                setFruit={setBananen}
                imgUrl="./public/banaan.jpg"
                imgAlt="Banaan"
            />
            <Fruit
                title="Appels"
                fruit={appels}
                setFruit={setAppels}
                imgUrl="./public/appel.jpg"
                imgAlt="Appel"
            />
            <Fruit
                title="Kiwi's"
                fruit={kiwis}
                setFruit={setKiwis}
                imgUrl="./public/kiwi.jpg"
                imgAlt="Kiwi"
            />
            <button
                type="button"
                id="reset"
                onClick={() => {
                    setAardbeien(0);
                    setBananen(0);
                    setAppels(0);
                    setKiwis(0);
                }}
            >Reset
            </button>

            <form className="order-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">Voornaam</label>
                <input type="text" id="firstName" name="firstName"
                       value={formState.name}
                       onChange={handleFormChange}
                />
                <label htmlFor="last-name">Achternaam</label>
                <input type="text" id="lastName" name="lastName"
                       value={formState.name}
                       onChange={handleFormChange}
                />
                <label htmlFor="age">Leeftijd</label>
                <input type="number" id="age" name="age"
                       value={formState.name}
                       onChange={handleFormChange}
                />
                <label htmlFor="zipcode">postcode</label>
                <input type="text" id="zipcode" name="zipcode"
                       value={formState.name}
                       onChange={handleFormChange}
                />
                <label htmlFor="freq">Bezorgfrequentie</label>
                <select id="freq" name="freq"
                        value={formState.name}
                        onChange={handleFormChange}
                >
                    <option value="weekly">Iedere week</option>
                    <option value="everyotherweek">Om de week</option>
                    <option value="monthly">Iedere maand</option>
                </select>
                <div className="dayTime">
                    <label htmlFor="dayTime"><input type="radio" name="dayTime"
                                                    value={formState.name}
                                                    onChange={handleFormChange}
                    />Overdag</label>
                    <label htmlFor="dayTime"><input type="radio" name="dayTime"
                                                    value={formState.name}
                                                    onChange={handleFormChange}
                    />s Avonds</label>
                </div>
                <div>
                    <label htmlFor="remakr">Opmerking</label>
                    <textarea className="remark" name="remark" id="remark"
                              value={formState.name}
                              onChange={handleFormChange}
                    >
                    </textarea>
                </div>
                <div className="agreement">
                    <label htmlFor="agreement">
                        <input type="checkbox" name="agreement" id="agreement"
                               value={formState.name}
                               onChange={handleFormChange}
                        />Ik ga akkoord met de voorwaarden
                    </label>
                </div>
                <button type="submit" disabled={!formState.agreement}>Verzend
                </button>

            </form>
        </>
    )
}

export default App
