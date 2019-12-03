import React from "react";
import Homepage from "./pages/homepage/Homepage.component";
import { Route } from "react-router-dom";

function App() {
  const hatPage = () => {
    return <h1>Hat page</h1>;
  };
  return (
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route exact path="/hat-page" component={hatPage} />
    </div>
  );
}

export default App;
