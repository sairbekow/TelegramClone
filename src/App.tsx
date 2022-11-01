<<<<<<< HEAD
import MainLayout from './components/MainLayout'
import AppRouter from './components/router/router'
import "./styles/globals.css"

function App() {
    return (
        <AppRouter/>
    )
=======
import MainLayout from "./components/MainLayout";
import AppRouter from "./components/router/router";
import "./styles/globals.css";

function App() {
    return (
        <MainLayout>
            <AppRouter />
        </MainLayout>
    );
>>>>>>> 5c219987fd8965c4239f771fbedbff78e8002fc4
}

export default App;
