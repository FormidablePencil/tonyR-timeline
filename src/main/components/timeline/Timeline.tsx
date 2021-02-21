import React from "react";
import contentRows from "./staticData";
import "./timeline.scoped.sass";

// change the dimensions of images of topSection

function Timeline() {
  return (
    <div className="container">
      <div className="timeline-content">
        <TimelineContent />
      </div>
    </div>
  );
}

const TimelineContent = (): any => {
  return contentRows.map((row) => (
    <div className="row" key={row.images.toString()}>
      <div
        className="text-content"
        style={{ ...row.contentStyles }}
      >
        <h2>{row.date}</h2>
        <p className='paragraph'>{row.content}</p>
      </div>
      {row.images.map((item, index) => (
        <img
          key={item.image.toString()}
          className={`image-${index}`}
          style={item.imageStyles}
          src={item.image}
          alt={item.alt}
        />
      ))}
    </div>
  ));
};

export default Timeline;