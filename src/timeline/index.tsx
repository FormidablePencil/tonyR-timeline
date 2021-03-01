import React, { useEffect } from "react";
import TopPresent from "../reusables/top-present";
import contentRows from "../staticData/timeline";
import "./index.scoped.sass";
import timelineImage from "../assets/imgs/timeline.jpg";

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
  return contentRows.map((row) => (
    <div className="container-width" key={row.images.toString()}>
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
