import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home'; 
import Contact from './Pages/Contact'
import Predication from './Pages/Predication'
import Ze from './Pages/Ze'
import Za from './Pages/Za'
import Zp from './Pages/Zp'
import Zk from './Pages/Zk'
import tout from './Pages/tout'

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        {/* <Route path='/Emision' element={<Emision/>}></Route> */}
        <Route path='/Predication'element={<Predication/>}></Route>
        <Route path='/Ze'element={<Ze/>}></Route>
        <Route path='/Za'element={<Za/>}></Route>
        <Route path='/Zp'element={<Zp/>}></Route>
        <Route path='/Zk'element={<Ze/>}></Route>
        <Route path='/tout'element={<tout/>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
