import bookImage from "../assets/imgs/books.jpg";
import TopPresent from "../reusables/top-present";
import tRbooks from "../staticData/book";
import "./index.scoped.sass";

function Books() {
  return (
    <div className="container">
      <TopPresent title="Books authored by Anthony Robbins" image={bookImage} />
      <div className="margin-container">
        <RenderBooks />
      </div>
    </div>
  );
}

const RenderBooks = (): any => {
  return tRbooks.map((data, index) => (
    <div className="book-container" key={index}>
      <img src={data.image} alt="" />
      <div className="text-container">
        <p className="category">{data.category}</p>

        <h1>{data.title}</h1>

        <p className="description">{data.description}</p>
      </div>
    </div>
  ));
};

export default Books;
