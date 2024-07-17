import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'
import Footer from './Footer/Footer.js'
import Main from './Main/Main.js'
import AnimatedIcons from './AnimatedIcons';
import './Main/background.css';
import './Footer/Footer.css'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
