import { Link } from "react-router-dom";
import ArticlesList from "./ArticlesList";
import { useSearchParams } from "react-router-dom";

function NavBar({ topics }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const topic = searchParams.get("topic");
  
  const handleChange= (click)=> {
    click.preventDefault();
    const [sort_by, order] = click.target.value.split("-");
    setSearchParams((searchParams) => {
      searchParams.set("sort_by", sort_by);
      searchParams.set("order", order);
      return searchParams;
    });
  }


  return (
    <section className="navbar">

      <button className="buttons">
        <Link to={"/"}>Home</Link>
      </button>
      <button className="buttons">Users/login</button>

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


        <select className="dropDown" name="sort_by" id="sorting" onChange={handleChange}>
        <option value="" selected disabled hidden>Sort by...</option>
          <option className="dropDownItems" value="created_at-desc">Date - Descending</option>
          <option className="dropDownItems" value="created_at-asc">Date - Ascending</option>
          <option className="dropDownItems" value="comment_count-desc">Most Comments</option>
          <option className="dropDownItems" value="comment_count-asc">Least Comments</option>
          <option className="dropDownItems" value="votes-desc">Most Voted</option>
          <option className="dropDownItems" value="votes-asc">Least Voted</option>
        </select>

        <ArticlesList params={searchParams}/>


    </section>
  );
}
export default NavBar;
