import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Archive = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //   Make a get request
    const fetchData = async () => {
      try {
        await axios.get("https://dummyjson.com/products").then((response) => {
          setData(response.data["products"]);
          console.log(response.data["products"]);
        });
      } catch (error) {
        console.log("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="archiveContainer">
      {data ? (
        data.map((product, index) => (
          <div key={index} className="single">
            <img src={product["thumbnail"]} alt={product["title"]} />
            <p className="title">{product["title"]}</p>
            <div className="link-container">
              <Link to={`/single/${product["id"]}`}> View Details</Link>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Archive;
