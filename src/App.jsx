import Advertise from "./sections/Advertise";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Input from "./sections/Input";
import Nav from "./sections/Nav";
import Statistics from "./sections/Statistics";

function App() {
  return (
    <>
      <main className="max-container">
        <Nav/>
        <Hero/>
        <Input/>
        <Statistics/>
        <Advertise/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
