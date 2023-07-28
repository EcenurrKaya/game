import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './components/Home';
import Post from './components/Post';
import Write from './components/Write';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Home/>
      <Post/>
      <Write/>
    </div>
  );
}

export default App;
