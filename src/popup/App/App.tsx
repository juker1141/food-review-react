import React, { Fragment, useState } from "react";
import Main from "../Main";
import Login from "../Login";
import Register from "../Register";

type PageContent = "Main" | "Login" | "Register";

function App() {
  const [pageContent, setPageContent] = useState<PageContent>("Login");

  const renderContent = () => {
    switch (pageContent) {
      case "Main":
        return <Main />;
      case "Login":
        return <Login />;
      case "Register":
        return <Register />;
      default:
        return <Login />;
    }
  };

  return <Fragment>{renderContent()}</Fragment>;
}

export default App;
