/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";

function News({ category, setProgress }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      setProgress(40);
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${
            import.meta.env.VITE_API_KEY
          }&page=${page}&pageSize=8`
        );
        setProgress(70);

        setData((prev) => [...prev, ...res.data.articles]);

        setProgress(100);
      } catch (err) {
        console.log("Error in fetchnews : News component", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, page, setProgress]);

  const handleScroll = () => {
    if (
      document.documentElement.scrollTop + window.innerHeight + 1 >
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        fontFamily: "Roboto",
        textTransform: "capitalize",
        letterSpacing: ".5rem",
      }}
    >
      <h1>
        Infinity News <br /> {category}
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {data.map((data) => (
          <Card key={Math.random()} data={data} />
        ))}
      </div>
      {loading && <Loader />}
    </div>
  );
}

export default News;
