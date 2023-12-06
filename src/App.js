import About from "./componenet/About/About";
import Header from "./componenet/Header/Header";
import TodoApp from "./componenet/TodoApp/TodoApp";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

function App() {
  return (
      <Router>
        <Header />
        <Routes>

        <Route path="/" Component={TodoApp}/>
        <Route path="/About" Component={About}/>
        </Routes>
      </Router>
  );
}

export default App;
