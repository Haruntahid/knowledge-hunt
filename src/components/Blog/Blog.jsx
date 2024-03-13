import PropTypes from "prop-types";
import { IoBookmark } from "react-icons/io5";

function Blog({ blog, handelBookmarks, handelTime }) {
  const {
    id,
    banner,
    blog_title,
    author_name,
    author_img,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className="p-5 bg-orange-600 rounded-2xl mb-3">
      <img className="w-full" src={banner} alt="" />
      <div className="flex justify-between items-center mt-5">
        <div className="flex items-center">
          <img className="w-14 h-14 rounded-full" src={author_img} alt="" />
          <div className="ml-4">
            <h2 className="text-2xl font-bold">{author_name}</h2>
            <p className="text-xl text-gray-100">{posted_date}</p>
          </div>
        </div>
        <div>
          <span className="text-gray-100">{reading_time} min read</span>
          <button
            onClick={() => handelBookmarks(blog)}
            className="mx-2 text-2xl"
          >
            <IoBookmark />
          </button>
        </div>
      </div>
      <h4 className="text-5xl font-bold my-5">{blog_title}</h4>

      {hashtags.map((hash, index) => (
        <span className="text-gray-300 mr-2" key={index}>
          #{hash}
        </span>
      ))}
      <div>
        <button
          onClick={() => handelTime(id, reading_time)}
          className="px-5 py-2 underline"
        >
          Mark as Read
        </button>
      </div>
    </div>
  );
}

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handelBookmarks: PropTypes.func.isRequired,
  handelTime: PropTypes.func.isRequired,
};

export default Blog;
