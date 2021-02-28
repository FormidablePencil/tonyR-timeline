import SelectionSection from "./components/selection-section";
import TopSection from "./components/top-section";
import "./index.scoped.sass";

function Home() {
  return (
    <div className="container">
        <TopSection />
        <SelectionSection />
    </div>
  );
}

export default Home;
