import './App.css';
import { Header } from './components/header';
import { Home } from './page/home';
import { WhoWeAre } from './page/whoWeAre';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <WhoWeAre />
    </div>
  );
}

export default App;
