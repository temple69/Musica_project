import { Routes,Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './Pages/Home';
import Playlist from './Pages/Playlist';





function App() {
    return (  
    <>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='playlist' element={<Playlist/>}/>
    </Routes>
    
    
   
    
    
    
    

   
    </>
    );
}

export default App;