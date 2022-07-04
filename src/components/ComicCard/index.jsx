import "./styles.css";

export default function ComicCard({ data }) {
  return (
    <div className="wrapper">
      <img
        src={`${data.images[0]?.path}/standard_large.${data.images[0]?.extension}`}
        alt="comic"
        className="comicImg"
      />

      <p className="title">{data.title}</p>
      <p>Issue Number: {data.issueNumber}</p>
      <p>Price: {data.prices[0].price ? data.prices[0].price : "-"} $</p>
    </div>
  );
}
