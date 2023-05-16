import { Link } from "react-router-dom";

function NavBar({ topics }) {
  return (
    <section className="navbar">
      <button className="buttons">
        <Link to={"/"}>Home</Link>
      </button>
      <button className="buttons">Users/login</button>

      <div className="navbar">
        <Link key={"All"} to={"/articles"}>
          <button className="buttons">All Topics</button>
        </Link>
        {topics?.map((topic) => {
          return (
            <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
              <button className="buttons">{topic.slug}</button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
export default NavBar;
