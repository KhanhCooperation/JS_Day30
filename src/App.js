import logo from "./logo.svg";
import "./App.css";
import BSHeader from "./Header/BSHeader";
import Body from "./Body/Body";
import Card from "./Card/Card";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <BSHeader></BSHeader>
      <Body></Body>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
