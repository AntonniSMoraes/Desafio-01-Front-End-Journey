import './App.css';
import { Header } from './components/header';
import { Home } from './page/home';
import { WhatWeDo } from './page/WhatWeDo';
import { WhoWeAre } from './page/whoWeAre';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <WhoWeAre />
      <WhatWeDo />
    </div>
  );
}

export default App;
