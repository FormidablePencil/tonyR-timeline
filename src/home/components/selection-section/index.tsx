import { useState } from "react";
import biographyImage from "../../../assets/imgs/autobiography.jpg";
import timelineImage from "../../../assets/imgs/timeline.jpg";
import booksImage from "../../../assets/imgs/books.jpg";
import "./index.scoped.sass";
import { useHistory } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

function SelectionSection({ setSelectedNav }) {
  const [selected, setSelected] = useState(null);
  let history = useHistory();

  const onClickHandler = (navigateTo) => {
    scroll.scrollToBottom();
    setSelected(navigateTo);
    setSelectedNav(`/${navigateTo}`);
    setTimeout(() => history.push(`/${navigateTo}`), 1100);
  };

  const isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function(p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      !window["safari"] ||
        (typeof safari !== "undefined" && safari.pushNotification)
    )
      ? "safari"
      : "que-animation";

  const isBiography = selected === "biography" && "selected";
  const isTimeline = selected === "timeline" && "selected";
  const isBooks = selected === "books" && "selected";

  return (
    <div className="container">
      <div className="selection-container">
        <div
          className={`${selected && `${isSafari}-left`}${
            isBiography ? `-${isBiography}` : ""
          } item`}
        >
          <div
            onClick={() => onClickHandler("biography")}
            className="image-container"
          >
            <img className="biography" src={biographyImage} alt="biography" />
            <div className="filter" />
          </div>
          <h2 className={`${isBiography}-header label`}>Biography</h2>
        </div>

        <div
          className={`${selected && `${isSafari}-center`}${
            isTimeline ? `-${isTimeline}` : ""
          } item`}
        >
          <div
            onClick={() => onClickHandler("timeline")}
            className="image-container"
          >
            <img className="timeline" src={timelineImage} alt="timeline" />
            <div className="filter" />
          </div>
          <h2 className={`${isTimeline}-header label`}>Timeline</h2>
        </div>

        <div
          className={`${selected && `${isSafari}-right`}${
            isBooks ? `-${isBooks}` : ""
          } item`}
        >
          <div
            onClick={() => onClickHandler("books")}
            className="image-container"
          >
            <img className="books" src={booksImage} alt="books" />
            <div className="filter" />
          </div>
          <h2 className={`${isBooks}-header label`}>Books</h2>
        </div>
      </div>
    </div>
  );
}

export default SelectionSection;
