import Nav from "./components/Nav";
import Home from "./Home.jsx";
import Books from "./Books.jsx";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" component={Books} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
