import './App.css'
import {useState} from "react";
import Fruit from "./components/Fruit.jsx";

function App() {

    const [aardbeien, setAardbeien] = useState(0);
    const [bananen, setBananen] = useState(0);
    const [appels, setAppels] = useState(0);
    const [kiwis, setKiwis] = useState(0);

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
        </>
    )
}

export default App
