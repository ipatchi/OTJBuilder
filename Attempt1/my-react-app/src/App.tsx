import './App.css';
import CentredScreen from './Components/Centre/CentredScreen';
import NavBar from './Components/NavBar/NavBar';
import OTJEntry from './Components/OTJ Entry/OTJEntry';

function App() {
  return (
    <>
      <NavBar title="OTJ Tool"></NavBar>
      <CentredScreen>
        <OTJEntry></OTJEntry>
      </CentredScreen>
    </>
  );
}

export default App;
