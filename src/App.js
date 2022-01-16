import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data";

function App() {
  const cardData = data.map(item =>
    <Card
      key={item.id}
      {...item} />
  )

  return (
    <div className="App">
      <Navbar />
      <div className="cards">
        {cardData}
      </div>
    </div>
  );
}

export default App;
