import "./App.css";
// import Card from "./components/Card/Card";
import HeroSection from "./components/HeroSection/HeroSection";
//@ts-ignore
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection />
      {/* <Card/> */}
    </div>
  );
}

export default App;
