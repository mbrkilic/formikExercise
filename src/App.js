import './App.css';
import { Route, Routes } from 'react-router-dom';
import GeneralForm from './components/GeneralForm';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<GeneralForm/>}/>
     </Routes>
    </div>
  );
}

export default App;
