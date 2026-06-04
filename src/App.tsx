import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  function greet(name: string): string {
    return `Hello, ${name}!`;
  }
  
  const message: string = greet("World");
  console.log(message);
  
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
