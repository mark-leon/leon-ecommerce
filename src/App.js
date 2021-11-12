import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home/Home";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/:cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;


     {/* <Route exact path="/" element={<PrivateRoute/>} > */}