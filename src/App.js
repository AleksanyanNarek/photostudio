//Global Style
import GlobalStyle from './components/globalStyle'
//import pages
import Nav from "./components/nav";
import AboutUs from './pages/aboutUs';
import OurWork from './pages/ourWork';
import ContactUs from './pages/contactUs';
import MovieDetail from './pages/movieDetail';
//Router
import { Routes, Route } from "react-router-dom";
//Animation
import { AnimatePresence } from 'framer-motion';

function App() {
  
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<AboutUs />}></Route>
          <Route path="/work" element={<OurWork />}></Route>
          <Route path="/work/:id" element={<MovieDetail />}></Route>
          <Route path="/contact" element={<ContactUs />}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
