import './App.css'
import {useState} from "react";
import Fruit from "./components/Fruit.jsx";
import InputField from "./components/InputField.jsx";
import Button from "./components/Button.jsx";
import TextField from "./components/TextField.jsx";

function App() {

    const [fruitAmount, setFruitAmount] = useState({
        aardbeien: 0,
        bananen: 0,
        appels: 0,
        kiwis: 0
    });

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
        console.log(fruitAmount);
        console.log(formState);
    }

    function handleFruitClick(e) {
        const changedFieldName = e.currentTarget.name;
        const newValue = fruitAmount[changedFieldName] +
            ((e.currentTarget.id === "add")? 1 : -1);
        setFruitAmount({
            ...fruitAmount,
            [changedFieldName]: newValue,
        });
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
                id="aardbeien"
                fruitAmount={fruitAmount.aardbeien}
                disabled={fruitAmount.aardbeien === 0}
                imgUrl="./aardbei.jpg"
                imgAlt="Aardbei"
                onClick={handleFruitClick}
            />
            <Fruit
                title="Bananen"
                id="bananen"
                fruitAmount={fruitAmount.bananen}
                disabled={fruitAmount.bananen === 0}
                imgUrl="./banaan.jpg"
                imgAlt="Banaan"
                onClick={handleFruitClick}
            />
            <Fruit
                title="Appels"
                id="appels"
                fruitAmount={fruitAmount.appels}
                disabled={fruitAmount.appels === 0}
                imgUrl="./appel.jpg"
                imgAlt="Appel"
                onClick={handleFruitClick}
            />
            <Fruit
                title="Kiwi's"
                id="kiwis"
                fruitAmount={fruitAmount.kiwis}
                disabled={fruitAmount.kiwis === 0}
                imgUrl="./kiwi.jpg"
                imgAlt="Kiwi"
                onClick={handleFruitClick}
            />
            <Button
                type="button"
                id="reset"
                label="Reset"
                onClickHandle={() => {
                    setFruitAmount({
                        aardbeien: 0,
                        bananen: 0,
                        appels: 0,
                        kiwis: 0
                    });
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
