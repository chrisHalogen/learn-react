import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleNews = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if (Number(id) > 10) {
      console.log(true);
      navigate("/");
    }
  }, []);

  //   console.log(typeof id);

  return <h1>Single News Page for item with id of {id}</h1>;
};

export default SingleNews;
