
import './App.css';
import Test from './Componentes/Test';



function App() {
  return (
    <div className="App">
      <div className='ContenedorPrincipal'>
        <h1>Titulo Principal</h1>
        <Test
        nombre='nombre'
        lugar='pais'
        cargo="cargos"
        />
        <Test
        nombre='sin nombre'
        lugar='allá'
        cargo="sin cargo"
        />
        <Test
        nombre='sin -----'
        lugar='paisito'
        cargo="sin cargo"
        />
        <Test
        nombre='sin -----'
        lugar='paisito'
        cargo="sin cargo"
        />
      </div>
    </div>
  );
}

export default App;
