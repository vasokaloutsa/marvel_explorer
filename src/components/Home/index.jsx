import { useEffect, useState } from "react";
import ComicCard from "../ComicCard";


export default function Home() {
  const [data, setData] = useState([]);
  const CHARACTERS_URL = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c73b8ffc61ed4a88fc2672e4dcca239e&hash=84be1de7f4d348318c62104656b00587`;
  useEffect(() => {
    fetch(CHARACTERS_URL)
      .then((res) => res.json())
      .then((data) => setData(data.data.results));
  }, [CHARACTERS_URL]);
  return (
    <div>
      {data.map((comic) => (
        <ComicCard data={comic} key={comic.id}/>
      ))}
    </div>
  );
}
