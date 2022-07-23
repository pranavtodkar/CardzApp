import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/Topbar";
import Whiteboard from "./components/Whiteboard"


function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div className="App">
      <Topbar/>
      <Whiteboard/>
    </div>
  );
}
export default App;