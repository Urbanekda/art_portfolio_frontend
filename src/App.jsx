import Sidebar from './components/sidebar';
import Footer from "./components/footer"
import Home from "./pages/home";
import Contact from './pages/contact';
import PortfolioMalba from './pages/portfolioMalba';
import PortfolioAnimace from './pages/portfolioAnimace';
import PortfolioZakazky from "./pages/portfolioZakazky";
import About from './pages/about';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App () {
  return (
    <Router>
      <div className='App flex'>
        <Sidebar />
      <div className="content flex-1 ml-36 bg-main-bg">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/o_mne" Component={About} />
            <Route path="/kontakt" Component={Contact} />
            <Route path="/portfolio/malba" Component={PortfolioMalba} />
            <Route path="/portfolio/animace" Component={PortfolioAnimace} />
            <Route path="/portfolio/zakazky" Component={PortfolioZakazky} />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

