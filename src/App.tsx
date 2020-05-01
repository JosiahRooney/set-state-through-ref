import React from "react";
import "./App.css";

import AddToCalendar from "./components/AddToCalendar";

const event = {
  duration: "5",
  endDatetime: "2020-01-01",
  startDatetime: "2020-01-01",
  title: "Event title",
};

function App() {
  return (
    <div className="App">
      <AddToCalendar event={event} />
    </div>
  );
}

export default App;
