import Header from "../Header";
import ReviewList from "../Review/ReviewList";

const Main = () => {
  return (
    <div className="overflow-y-hidden">
      <Header />
      <main className="overflow-y-auto">
        <ReviewList />
      </main>
    </div>
  );
};

export default Main;
