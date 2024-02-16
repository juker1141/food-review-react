import React, { useEffect, Fragment, useState } from "react";

import Main from "../Main";
import Login from "../Login";
import Register from "../Register";

export type PageContent = "Main" | "Login" | "Register";

function App() {
  const [pageContent, setPageContent] = useState<PageContent>("Login");

  useEffect(() => {
    // async function getJwtToken() {
    //   const res = await Browser.storage.local.get("jwtToken");
    //   console.log(res);
    // }
    // getJwtToken();
  }, []);

  const renderContent = () => {
    switch (pageContent) {
      case "Main":
        return <Main setPageContent={setPageContent} />;
      case "Login":
        return <Login setPageContent={setPageContent} />;
      case "Register":
        return <Register setPageContent={setPageContent} />;
      default:
        return <Login setPageContent={setPageContent} />;
    }
  };

  return <Fragment>{renderContent()}</Fragment>;
}

export default App;
