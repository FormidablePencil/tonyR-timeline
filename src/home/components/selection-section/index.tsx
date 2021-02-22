import biographyImage from "../../../assets/imgs/autobiography.jpg";
import timelineImage from "../../../assets/imgs/timeline.jpg";
import booksImage from "../../../assets/imgs/books.jpg";
import "./index.scoped.sass";

function SelectionSection() {
  return (
    <div className="container">
      <div className="selection-container">
        <div className="item">
          <div className="image-container">
            <img className="biography" src={biographyImage} alt="biography" />
            <div className="filter" />
          </div>
          <h2 className="label">Biography</h2>
        </div>
        <div className="item">
          <div className="image-container">
            <img className="timeline" src={timelineImage} alt="timeline" />
            <div className="filter" />
          </div>
          <h2 className="label">Timeline</h2>
        </div>
        <div className="item">
          <div className="image-container">
            <img className="books" src={booksImage} alt="books" />
            <div className="filter" />
          </div>
          <h2 className="label">Books</h2>
        </div>
      </div>
    </div>
  );
}

export default SelectionSection;
