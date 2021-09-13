import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo';
import BottomNavBar from './components/BottomNavBar';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <Logo />
      <Container />
      <BottomNavBar />
    </div>
  );
}

export default App;
