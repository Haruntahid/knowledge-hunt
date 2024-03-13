import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

function Blogs({ handelBookmarks, handelTime }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <>
      {/* <h1>Total Blogs : {blogs.length}</h1> */}
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handelBookmarks={handelBookmarks}
          handelTime={handelTime}
        />
      ))}
    </>
  );
}

export default Blogs;
