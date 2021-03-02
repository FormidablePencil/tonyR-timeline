import MobileTopSection from "./components/mobile-top-section";
import SelectionSection from "./components/selection-section";
import TopSection from "./components/top-section";
import "./index.scoped.sass";
import TR from "../assets/imgs/tony-clap.jpg";

function Home({ setSelectedNav }) {
  return (
    <div className="container">
      <div className="visible-on-desktop">
        <TopSection
          image={TR}
          title="Tony Robbins' legacy"
          paragraph="kwDolor architecto voluptate magni maxime quis ab. Fuga molestias ex cumquas blanditiis amet unde Assumenda aperiam totam sapiente ea fugiat nam. Sapiente nobis autem quibusdam molestias quas, totam."
        />
      </div>
      <div className="visible-on-mobile">
        <MobileTopSection
          image={TR}
          title="Tony Robbins' legacy"
          paragraph="kwDolor architecto voluptate magni maxime quis ab. Fuga molestias ex cumquas blanditiis amet unde Assumenda aperiam totam sapiente ea fugiat nam. Sapiente nobis autem quibusdam molestias quas, totam."
        />
      </div>
      <SelectionSection setSelectedNav={setSelectedNav} />
    </div>
  );
}

export default Home;
