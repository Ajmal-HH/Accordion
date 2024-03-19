import './App.css';
import Accordion from './Component/Accordion';
import accordionData from './accordionData';
function App() {
  return (
    <div className="App">
      <Accordion accordionData={accordionData} />
    </div>
  );
}
  
export default App;
