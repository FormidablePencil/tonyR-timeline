import TopPresent from "../reusables/top-present";
import bioImage from "../assets/imgs/autobiography.jpg";
import "./index.scoped.sass"
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
    <h1>About Anthony Robbins</h1>
    <p className="bio">{bioData.bio}</p>

    {bioData.moreContent.map(({ title, paragraph }) => (
      <div className="more-content">
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    ))}
  </div>
);

export default Biography;
