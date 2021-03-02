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
        paragraph="kwDolor architecto voluptate magni maxime quis ab. Fuga molestias ex cumquas blanditiis amet unde Assumenda aperiam totam sapiente ea fugiat nam. Sapiente nobis autem quibusdam molestias quas, totam."
      />
      <SelectionSection setSelectedNav={setSelectedNav} />
    </div>
  );
}

export default Home;
