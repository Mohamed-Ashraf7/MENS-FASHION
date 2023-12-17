import { useState, useEffect, Fragment } from "react";
import Loader from "./components/Loader.jsx";
import Header from "./components/Header";
import Home from "./components/Home";
import Description from "./components/Description";
import About from "./components/About";
import CommunitySlider from "./components/Community";
import Blog from "./components/Blog";
import Steps from "./components/Steps";
import News from "./components/News";
import Quote from "./components/Quote";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import MemberShip from "./components/MemberShip";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTOP from "./components/BackTOP";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(time);
  }, []);

  return (

    <div className="mx-auto overflow-hidden" >
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <Header />
          <Home />
          <Description />
          <About />
          <CommunitySlider />
          <Blog />
          <Steps />
          <News />
          <Quote />
          <Gallery />
          <Team />
          <MemberShip />
          <Contact />
          <Footer />
          <BackTOP />
        </Fragment>
      )}
    </div>
       
  );
};
export default App;
