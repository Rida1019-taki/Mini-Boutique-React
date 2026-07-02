import './App.css';
import {useState} from "react";


function App() {
    const [name, setName] = useState("");

    function handleInputChange(event) {
        console.log(event);
        setName(event.target.value);
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={handleInputChange}
                placeholder="Entrez votre nom"
            />

            <h3>Bonjour : {name}</h3>
        </div>

    );
}
export default App;






/*let counter = 0;
    return(
        <div>
            <p>counter : {counter}</p>
            <button onClick={()=>
            {counter++ && console.log(counter)} }>Click</button>
        </div>
        */






/*const [isVisible, setIsVisible] = useState(false);

    return (
        <div className="container">
            <button
                className="btn"
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible ? "Cacher" : "Afficher"}
            </button>

            {isVisible && (
                <p className="message">
                    Coucou !
                </p>
            )}
        </div>*/



/**/