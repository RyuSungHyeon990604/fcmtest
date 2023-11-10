import logo from './logo.svg';
import './App.css';
import { Fcm } from './component/Fcm';

function App() {
  return (
    <div className="App">
     <Fcm></Fcm>
     <button onClick={()=>window.location.reload()}>sdfsadf</button>
    </div>
  );
}

export default App;
