import Sidebar from './components/sidebar';
import Home from "./pages/home";
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
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
            <Route path="/portfolio" Component={Portfolio} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

