import profile from "../../images/profile.png";

function Header() {
  return (
    <div className="flex justify-between items-center my-5">
      <h2 className="text-4xl">Knowledge Hunt</h2>
      <img src={profile} alt="" />
    </div>
  );
}

export default Header;
