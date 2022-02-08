import "./styles/App.css";

import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Feature></Feature>
    </div>
  );
}

export default App;
