import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./styles/globals.scss";

import Navbar from "./navbar";
import GrowYourBusiness from "./components/growyourbusiness";
import Featured from "./components/featured";
import Subscribe from "./components/subscribe";
import Company from "./components/company";
import Advertise from "./components/advertise";
import GetStarted from "./components/getstarted";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <GrowYourBusiness />
        <Featured />
        <Subscribe />
        <Company />
        <Advertise />
        <GetStarted />
        <Footer />
      </main>
    </div>
  );
}

export default App;
