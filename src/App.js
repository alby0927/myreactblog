import TopBar from './comp/topbar/TopBar';
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Portfolio from './pages/portfolio/Portfolio';

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const user = false;
  return (
         <BrowserRouter>
           <TopBar />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/detail/*" element={<Detail />} />     
               <Route path="/About/*" element={<About />} />     
               <Route path="/Contact/*" element={<Contact />} />     
               <Route path="/Portfolio/*" element={<Portfolio />} />     
               {/* <Route path="/write/*" element={(user=='wein')? <Write /> : <Home />} />      */}
           </Routes>
         </BrowserRouter>
  );
}

export default App;
