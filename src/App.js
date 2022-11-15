import './App.css';
import { Testimonio } from './componets/testimonios.jsx';
import personas from './componets/personas.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
      {
        personas.map(persona =>(
         <Testimonio obj ={persona}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
