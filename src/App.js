import logo from './logo.svg';
import './App.css';
import Counter from './Component/Counter';
import Data from './Component/CounterData';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App w-100 m-auto">
      <Counter name='Comment Box' />
    </div>
  );
}

export default App;
