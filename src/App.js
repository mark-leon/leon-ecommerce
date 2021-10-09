import Alltrending from "./Components/Alltrending/Alltrending";
import Facility from "./Components/Facility/Facility";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Productcontainer from "./Components/Productcontainer/Productcontainer";
import Testimonial from "./Components/Card/Card";
import Card from "./Components/Card/Card";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Alltrending></Alltrending>
      <Productcontainer></Productcontainer>
      <Facility></Facility>
      <Card></Card>
      <Newsletter></Newsletter>
      <Footer></Footer>
    </div>
  );
}

export default App;
