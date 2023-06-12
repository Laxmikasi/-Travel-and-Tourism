import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home from './Components/Home/home';
import Features from './Components/Features/features';
import Book from './Components/Book/book';
import Gallery from './Components/Gallery/gallery';
import Review from './Components/Review/review';
import Contact from './Components/Contact us/contact';
import Chinag from './Components/chinag/chinag';
import Alleppey from './Components/chinag/alleppey';
import Punjab from './Components/chinag/punjab';
import Munnar from './Components/chinag/munnar';
import Bali from './Components/chinag/bali';
import Uttarakhand from './Components/chinag/uttarakhand';
import Data from './Components/Data';
import Contact2 from './Components/Contact us/contact2';
import Features1 from './Components/Features/features1';
function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/book" element={<Book/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/contact" element={<Contact us/>}/>
        <Route path="/chinag" element={<Chinag/>}/>
        <Route path="/alleppey" element={<Alleppey/>}/>
        <Route path="/punjab" element={<Punjab/>}/>
        <Route path="/munnar" element={<Munnar/>}/>
        <Route path="/bali" element={<Bali/>}/>
        <Route path="/uttarakhand" element={<Uttarakhand/>}/>
        <Route path="/display" element={<Data/>}/>
        <Route path="/contact2" element={<Contact2/>}/>
        <Route path="/features1" element={<Features1/>}/>


      </Routes>
      </div>
      </Router>
  );
  
}

export default App;
