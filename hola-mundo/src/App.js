// import logo from './logo.svg';
import './App.css';
import Father from './components/containers/father';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
// import TaskListComponent from './components/containers/task_list';
// import GreetingStyled from './components/pure/greetingStyled';
// import ContactoListComponent from './components/containers/contacto_list';
//import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
//import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Clock from './hooks/lifeCycle/Clock';

function App() {
  return (
    <div className="App">
        {/* <header className="App-header"> */}
        {/*<img src={logo} className="App-logo" alt="logo" /> */}

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
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* Ejemplo 4 */}
        {/* <Ejemplo4 nombre="Alejandra"> */}
        {/* Todo lo que hay aquí es tratado como props.children */}
          {/* <h3>
            Contenido del children
          </h3>
        </Ejemplo4> */}

        {/* Ciclo de vida */}

        {/* Greetin Style */}
        {/* <GreetingStyled name='Alejandra'></GreetingStyled> */}

        {/* <Clock></Clock> */}
        {/* </header> */}

      {/* Gestor de eventos */}
      <Father></Father>
    </div>
  );
}

export default App;
