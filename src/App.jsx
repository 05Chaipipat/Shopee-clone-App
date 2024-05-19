import "./App.css";
import Discount from "./components/Discount";
import Homebanner from "./components/Homebanner";
import HomeProducts from "./components/HomeProduct";
import NavbarComponent from "./components/Navbar";


function App() {
  return (
    <>
      <NavbarComponent/>
      <Homebanner/>
      <Discount/>
      <HomeProducts/>
    </>
  );
}

export default App;
