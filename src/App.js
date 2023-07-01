import React, { Suspense, useState, useEffect } from "react";
import CommunitySlider from "./components/Community";
import Description from "./components/Description";
import Header from "./components/Header";
import Home from "./components/Home";
import Quote from "./components/Quote";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackTOP from "./components/BackTOP";
import Loader from "./components/Loader.jsx";
const About = React.lazy(() => import("./components/About"));
const Blog = React.lazy(() => import("./components/Blog"));
const MemberShip = React.lazy(() => import("./components/MemberShip"));
const News = React.lazy(() => import("./components/News"));
const Steps = React.lazy(() => import("./components/Steps"));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(time);
  }, []);
  return (
    <div className="max-w-[1920px] mx-auto overflow-hidden">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <Description />
          <Suspense fallback="...">
            <About />
          </Suspense>
          <CommunitySlider />
          <Suspense fallback="...">
            <Blog />
            <Steps />
            <News />
          </Suspense>
          <Quote />
          <Gallery />
          <Team />
          <Suspense fallback="...">
            <MemberShip />
          </Suspense>
          <Contact />
          <Footer />
          <BackTOP />
        </>
      )}
    </div>
  );
};
export default App;
