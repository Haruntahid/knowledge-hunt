function Bookmark({ bookmarks, time }) {
  return (
    <>
      <div className="p-5 bg-[#6047EC1A] border-[1px] border-[#6047EC] text-center">
        <p className="text-2xl text-[#6047EC] font-semibold">
          Spent time on read : {time} min
        </p>
      </div>
      <div className="p-4 bg-gray-100 rounded-xl mt-6">
        <h1 className="text-2xl font-bold mb-4">
          Bookmarked Blogs :{bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, index) => (
          <h4
            className="text-2xl p-4 bg-white rounded-lg mb-4 font-semibold"
            key={index}
          >
            {bookmark.blog_title}
          </h4>
        ))}
      </div>
    </>
  );
}

export default Bookmark;
