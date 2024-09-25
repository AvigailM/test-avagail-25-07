import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

import Carousel from "./Carousel";

type BlogProps = {
    
};

const retrievePosts = async () => {
    const response = await axios.get(
      "https://api.tvmaze.com/shows?page=1",
    );
    return response.data;
  };
  

const Blog = ({  }: BlogProps) => {
    const {
        data: posts,
        error,
        isLoading,
      } = useQuery("postsData", retrievePosts);
    
      if (isLoading) return <div>Fetching posts...</div>;
      if (error) return <div>An error occurred: {'error'}</div>;
    
      return (
        <ul><Carousel data={posts}/></ul>
      );
};

export default Blog;
