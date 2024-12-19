import { useEffect, useState } from "react";
import Categorias from "./component/Categorias";
import CountryInfo from "./component/EjemplosClase/CountryInfo";
import CrudComponent from "./component/EjemplosClase/CrudComponent";
import { obtenerDatos } from "./component/EjemplosClase/EjemploHTTP";
import TaskList from "./component/EjemplosClase/HOC/TaskList";
import LoggedComponent from "./component/EjemplosClase/HOC/withLogging";
import PokemonList from "./component/EjemplosClase/PokemonList";
import PollingExample from "./component/EjemplosClase/PollingExample";
import Footer from "./component/Footer";
import { Header } from "./component/Header";
import MainPage from "./component/MainPage";
import { Navegacion } from "./component/Navegacion";
import SobreNosotros from "./component/SobreNosotros";

const Tarjeta = ({ titulo, children }) => {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <h2>{titulo}</h2>
      <div>{children}</div>
      <CrudComponent/>
      <PollingExample/>
      <CountryInfo countryName={'argentina'}/>
      <PokemonList/> {/* EN POKEMONLIST usamos el HOOK useFetch */}
      <LoggedComponent/>
      <TaskList/>
    </div>
  );
};

function App() {
  const [data, setData] = useState();
  const [mensajeHijo, setMensajeHijo] = useState('Componente hijo')

  const traerInformacion = async () => {
    const result = await obtenerDatos();
    setData(result)    
  }
  useEffect(()  => {
    traerInformacion();    
  },[])
  useEffect(() => {
    if(data){
      setMensajeHijo(data.title)
    }
  }, [data])
  return (
    <>
      {/* EJEMPLO DE CHILDREN */}
      <Tarjeta titulo="Título de la tarjeta">
      <p>{mensajeHijo}</p>
      </Tarjeta>

      <Header />
      {/* WEB PASADA A REACT */}
      <Navegacion />
      <Categorias />
      <SobreNosotros />
      <MainPage />
      <Footer />
    </>
  );
}

export default App;
