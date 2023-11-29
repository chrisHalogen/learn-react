import React, { useState, useEffect } from "react";
import axios from "axios";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //   Make a get request
    const fetchData = async () => {
      try {
        await axios.get("https://dummyjson.com/products").then((response) => {
          setData(response.data["products"]);
        });
      } catch (error) {
        console.log("Error Fetching Data:", error);
      }
    };

    // fetchData();

    let postData = {
      title: "BMW Pencil",
      description: "This is a BMW Pencil",
    };

    let url = "https://dummyjson.com/products/add";

    const handlePost = async () => {
      try {
        const response = await axios.post(url, postData);
        console.log("Post Request Response", response.data);
      } catch (error) {
        console.log("Error Posting Data:", error);
      }
    };

    handlePost();
  }, []);

  //   if (data.length == 0) {
  //     return <h1>No Products Found</h1>;
  //   }

  return (
    <div>
      {data ? (
        data.map((product, index) => <h3 key={index}>{product["title"]}</h3>)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
