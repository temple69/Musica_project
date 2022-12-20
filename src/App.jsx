import './App.css';
import AudioComponent from './components/Audio/AudioComponent';
import Chart from './components/Charts/Chart';
import Header from './components/Header/Header';
import Landing from './components/Landing/Landing';
import Layout from './components/Layout/Layout';
import Release from './components/Releases/Release';

function App() {
    return (  
    <>
    <Header/>
    <Layout>
        <Landing/>
    </Layout>
    <Release/>
    
    

   
    </>
    );
}

export default App;