import { useState } from "react";

import type { PageContent } from "../App/App";
import Header from "../Header";

import ShopHeader from "../Shop/Header";
import ReviewList from "../Review/ReviewList";

const Main = ({
  setPageContent,
}: {
  setPageContent: React.Dispatch<React.SetStateAction<PageContent>>;
}) => {
  const [isTopReview, setIsTopReview] = useState(true);

  return (
    <div className="overflow-hidden">
      <Header />
      <main className="mt-[60px]">
        <ShopHeader />
        <ReviewList isTopReview={isTopReview} setIsTopReview={setIsTopReview} />
      </main>
    </div>
  );
};

export default Main;
