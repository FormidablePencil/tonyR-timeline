import SelectionSection from "./components/selection-section";
import TopSection from "./components/top-section";
import "./index.scoped.sass";
import TR from "../assets/imgs/tony-clap.jpg";

function Home({ setSelectedNav }) {
  return (
    <div className="container">
      <TopSection
        image={TR}
        title="The legacy of Tony Robbins"
        paragraph="Whatever you hold in your mind on a consistent basis is exactly what you will experience in your life."
      />
      <SelectionSection setSelectedNav={setSelectedNav} />
    </div>
  );
}

export default Home;
