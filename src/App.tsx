import { useState } from "react";
import reactLogo from "@/assets/icons/react.svg";
import ContactWrapper from "./components/contacts/contactWrapper";

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <ContactWrapper />
        </div>
    );
}

export default App;
