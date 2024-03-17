import './App.css';
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { YMaps } from '@pbe/react-yandex-maps';

function App() {
  return (
    <div className="App">
        <YMaps>
            <Header/>
            <AppRouter/>
            <Footer/>
        </YMaps>
    </div>
  );
}

export default App;
