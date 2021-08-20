
import Route from './routes';
import "./style.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='app'>
      <Route/>
      <ToastContainer autoClose={1750}/>
    </div>
  );
}

export default App;
