import React from "react";
import timelineImage from "../assets/imgs/timeline.jpg";
import TopPresent from "../reusables/top-present";
import contentRows from "../staticData/timeline";
import "./index.scoped.sass";

// change the dimensions of images of topSection

function Timeline() {
  return (
    <div className="container">
      <TopPresent title="Timeline" image={timelineImage} />
      <div className="timeline-content">
        <TimelineContent />
      </div>
    </div>
  );
}

const TimelineContent = (): any => {
  return contentRows.map((row, index) => (
    <div className="container-width" key={index}>
      <div className="text-content">
        <h2>{row.date}</h2>
        <p className="paragraph">{row.content}</p>
      </div>
      {/* {row.images.map((item, index) => ( */}
      {/*   <img */}
      {/*     key={item.image.toString()} */}
      {/*     className={`image-${index}`} */}
      {/*     style={item.imageStyles} */}
      {/*     src={item.image} */}
      {/*     alt={item.alt} */}
      {/*   /> */}
      {/* ))} */}
    </div>
  ));
};

export default Timeline;
