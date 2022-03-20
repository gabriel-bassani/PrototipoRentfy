import "./App.css";
import { Busca } from "./components/Busca/Busca";
import { Filtro } from "./components/Filtro/Filtro";

function App() {
  return (
    <div className="App">
      <h3>Bem vindo, Gabriel</h3>
      <Busca />
      <input type="text" name="input" value="Digite aqui" />
      <div class="filtro">
        <Filtro />
        <Filtro />
        <Filtro />
      </div>
    </div>
  );
}

export default App;
