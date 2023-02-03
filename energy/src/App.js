import './App.css';
import "primereact/resources/themes/bootstrap4-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Navigation from './components/Nav';
import { PieChartDemo } from './components/PieChart';
import { ProgressBar } from 'primereact/progressbar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <header className="App-header">
        <p>
          Hello World!
        </p>
        
      </header>
      <PieChartDemo/>
      
    </div>
  );
}

export default App;
