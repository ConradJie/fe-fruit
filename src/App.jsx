import './App.css'
import {useState} from "react";
import Fruit from "./components/Fruit.jsx";
import InputField from "./components/InputField.jsx";
import Button from "./components/Button.jsx";
import TextField from "./components/TextField.jsx";

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
        freq: 'weekly',
        dayTime: '',
        remark: '',
        agreement: false,
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(aardbeien, bananen, appels, kiwis);
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
                imgUrl="./aardbei.jpg"
                imgAlt="Aardbei"
            />
            <Fruit
                title="Bananen"
                fruit={bananen}
                setFruit={setBananen}
                imgUrl="./banaan.jpg"
                imgAlt="Banaan"
            />
            <Fruit
                title="Appels"
                fruit={appels}
                setFruit={setAppels}
                imgUrl="./appel.jpg"
                imgAlt="Appel"
            />
            <Fruit
                title="Kiwi's"
                fruit={kiwis}
                setFruit={setKiwis}
                imgUrl="./kiwi.jpg"
                imgAlt="Kiwi"
            />
            <Button
                type="button"
                id="reset"
                label="Reset"
                onClickHandle={() => {
                    setAardbeien(0);
                    setBananen(0);
                    setAppels(0);
                    setKiwis(0);
                }}
            />
            <form className="order-form" onSubmit={handleSubmit}>
                <InputField
                    type="text"
                    id="firstName"
                    label="Voornaam"
                    value={formState.name}
                    onChange={handleFormChange}
                />
                <InputField
                    type="text"
                    id="lastName"
                    label="Achternaam"
                    value={formState.name}
                    onChange={handleFormChange}
                />
                <InputField
                    type="number"
                    id="age"
                    label="Leeftijd"
                    value={formState.name}
                    onChange={handleFormChange}
                />
                <InputField
                    type="text"
                    id="zipcode"
                    label="Postcode"
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
                    <InputField
                        type="radio"
                        id="dayTime"
                        label="Overdag"
                        value="daytime"
                        onChange={handleFormChange}
                    />
                    <InputField
                        type="radio"
                        id="dayTime"
                        label="'s Avonds"
                        value="evening"
                        onChange={handleFormChange}
                    />
                </div>
                <TextField
                    id="remark"
                    className="remark"
                    label="Opmerking"
                    value={formState.name}
                    onChange={handleFormChange}
                />
                <div className="agreement">
                    <InputField
                        type="checkbox"
                        id="agreement"
                        label="Ik ga akkoord met de voorwaarden"
                        value={formState.name}
                        onChange={handleFormChange}
                    />
                </div>
                <Button
                    type="submit"
                    label="Verzend"
                    disabled={!formState.agreement}
                />
            </form>
        </>
    )
}

export default App
