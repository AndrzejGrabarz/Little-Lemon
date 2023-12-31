import './App.css'; 
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      Homepage
      <Nav />
      <Header/>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
