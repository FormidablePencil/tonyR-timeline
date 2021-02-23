import TopPresent from "../reusables/top-present";
import bioImage from "../assets/imgs/autobiography.jpg";
import "../styles/utilities.sass";
import bioData from "../staticData/bio";

function Biography() {
  return (
    <div className="container">
      <TopPresent title="Autobiography" image={bioImage} />
      <div className="content-container">
        <RenderBioContent />
      </div>
    </div>
  );
}

const RenderBioContent = () => (
  <div className="bio-container">
    <p className="bio">{bioData.bio}</p>

    {bioData.moreContent.map(({ title, paragraph }) => (
      <div className="more-content">
        <h3>{title}</h3>
        <p>{paragraph}</p>
      </div>
    ))}
  </div>
);

export default Biography;
