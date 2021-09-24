import Treemap from './components/Treemap';
import data from './components/data';
//import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  return (
    <div className="App">
      <Treemap data={data} height={400} width={600} />
    </div>
  );
}

export default App;
