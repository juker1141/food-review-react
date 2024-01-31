import React from "react";
import Header from "../Header";
import ReviewList from "../Review/ReviewList";

function App() {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <main className="overflow-y-auto">
        <ReviewList />
      </main>
    </div>
  );
}

export default App;
