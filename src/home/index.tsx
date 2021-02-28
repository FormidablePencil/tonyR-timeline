import SelectionSection from "./components/selection-section";
import TopSection from "./components/top-section";
import "./index.scoped.sass";

function Home({ setSelectedNav }) {
  return (
    <div className="container">
      <TopSection />
      <SelectionSection setSelectedNav={setSelectedNav} />
    </div>
  );
}

export default Home;
