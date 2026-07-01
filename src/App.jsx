import './App.css';
import {useState} from "react";


function App() {
    const [name, setName] = useState("");
    return (
        <input type="text"
               value={name}
               onChange={(e) =>
                   setName(e.target.value) && console.log("render")} placeholder="Entrez votre nom"  />
    );
}
export default App;
