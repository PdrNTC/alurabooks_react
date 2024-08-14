import './App.css';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';
import OpcoesIcones from './componentes/OpcoesIcones';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Logo></Logo> {/* componente Logo */}
        <OpcoesHeader></OpcoesHeader> {/* componente OpcoesHeader */}
        <OpcoesIcones></OpcoesIcones> {/* componente OpcoesIcones */}
        
      </header>
    </div>
  );
}

export default App;
