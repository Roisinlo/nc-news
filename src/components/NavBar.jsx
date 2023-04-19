// import { useState } from 'react'
import { Link } from "react-router-dom"

function NavBar(){
// const [topics, setTopics] = useState([]);
// const [isLoading, setIsLoading] = useState(true)


    return(
        <section className="navbar">
            {/* <form>
            <label for="topics">Choose a topic:</label>
            <select name='topics' id='topics'>
                <option key='default' value="">Select topic</option>
                {topics.map((topic)=>{
                    return(<option key={topic.article.topic} value={item.category_name}>{item.category_name}</option>)
                })}
            </select>
            </form> */}
            <button><Link to={"/"}>Home</Link></button>
            <button>Users/login</button>
        </section>
    )
};
export default NavBar;