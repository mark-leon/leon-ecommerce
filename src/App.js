import {BrowserRouter as
   Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='cart' elememt={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;


     {/* <Route exact path="/" element={<PrivateRoute/>} > */}