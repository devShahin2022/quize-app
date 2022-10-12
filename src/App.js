import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarheader from './components/Navbar/Navbarheader';
import Banner from './components/Banner/Banner';
import QuizeCard from './components/QuizeCard/QuizeCard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbarheader></Navbarheader>
      <Banner></Banner>
      <QuizeCard></QuizeCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
