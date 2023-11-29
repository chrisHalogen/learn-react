import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Single = () => {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    //   Make a get request
    const fetchData = async () => {
      let url = `https://dummyjson.com/products/${id}`;
      try {
        await axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
        });
      } catch (error) {
        console.log("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, [id]);

  return data ? (
    <div className="single-container">
      <div className="inner-container">
        <img src={data["thumbnail"]} alt="" />
        <p className="title">{data["title"]}</p>
        <p className="description">{data["description"]}</p>
        <div className="data-container">
          <p className="data">
            Price: <span>{data["price"]}</span>
          </p>
          <p className="data">
            Rating: <span>{data["rating"]}</span>
          </p>
          <p className="data">
            Stock: <span>{data["stock"]}</span>
          </p>
        </div>
        <div className="btn-wrapper">
          <Link to="/">Back To Home</Link>
        </div>
      </div>
    </div>
  ) : (
    <p>Loading.....</p>
  );
};

export default Single;
