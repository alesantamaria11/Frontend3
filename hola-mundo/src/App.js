import logo from './logo.svg';
import './App.css';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/containers/task_list';
//import ContactoListComponent from './components/containers/contacto_list';
//import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*Componente propio Greeting.jsx */}
        {/*<Greeting name="Alejandra"></Greeting>*/}
        
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name="Alejandra"></GreetingF> */}
        
        {/* Componente de listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        
        {/* Componente de listado de contactos */}
        {/* <ContactoListComponent></ContactoListComponent> */}

        {/* Ejemplos de usos de HOOKS */}
        {/* Ejemplo 1 */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* Ejemplo 2 */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* Ejemplo 3 */}
        <MiComponenteConContexto></MiComponenteConContexto>
      </header>
    </div>
  );
}

export default App;
