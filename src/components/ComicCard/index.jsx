import "./styles.css";

export default function ComicCard({ data }) {
  console.log(data);
  return (
    <div className="wrapper">
      {data.images[0] ? (
        <img
          src={`${data.images[0]?.path}/standard_large.${data.images[0]?.extension}`}
          alt="comic"
        />
      ) : (
        <p>No image found</p>
      )}
      <p>{data.title}</p>
      <p className="description">
        {data.description ? data.description : "No description provided"}
      </p>
      <p>Issue Number: {data.issueNumber}</p>
      <p>Price: {data.prices[0].price} $</p>
    </div>
  );
}
