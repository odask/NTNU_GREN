import Treemap from './components/Treemap';
import data from './components/data';
import Grid from "@material-ui/core/Grid";
//import ProgressBar from 'react-bootstrap/ProgressBar'

function App() {
  return (
    <div className="App" style= {{marginTop: 100}}>
      <Grid container spacing={2} direction="column" justifyContent="space-around" alignItems="center">
        <Treemap data={data} height={600} width={1000} />
      </Grid>
    </div>
  );
}

export default App;
