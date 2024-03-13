import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmark from "./components/Bookmark/Bookmark";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [time, setTime] = useState(0);

  const handelTime = (id, blog) => {
    setTime(time + parseInt(blog));
    //remove bookmark when add mark as read
    const remaingBookmark = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaingBookmark);
  };

  const handelBookmarks = (blog) => {
    const isBookmarkExists = bookmarks.some(
      (bookmark) => bookmark.id === blog.id
    );
    if (!isBookmarkExists) {
      setBookmarks([...bookmarks, blog]);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div className="flex justify-between gap-9">
          <div className="w-3/4">
            <Blogs handelBookmarks={handelBookmarks} handelTime={handelTime} />
          </div>
          <div className="w-1/4">
            <Bookmark bookmarks={bookmarks} time={time} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
