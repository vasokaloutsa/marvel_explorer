import { useEffect, useState } from "react";
import ComicCard from "../ComicCard";
import "./styles.css";

let offset = 0;
export default function Home() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    console.log(offset);
    fetch(
      `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=c73b8ffc61ed4a88fc2672e4dcca239e&hash=84be1de7f4d348318c62104656b00587&offset=${offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        const newData = [];
        data.data.results.forEach((p) => newData.push(p));
        setData((oldData) => [...oldData, ...newData]);
      });
    offset += 20;
  };


  const handleScroll = () => {
    let userScrollHeight = window.innerHeight + window.scrollY;
    let windowBottomHeight = document.documentElement.offsetHeight;
    if (userScrollHeight >= windowBottomHeight) {
      fetchData();
    }
  };
  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll); // attaching scroll event listener
  },[]);

  return (
    <div className="wrapper-grid">
      {data.map((comic, idx) => (
        <ComicCard data={comic} key={idx} />
      ))}
    </div>
  );
}
