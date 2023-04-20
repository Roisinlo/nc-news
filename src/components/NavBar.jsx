// import { useState } from 'react'
import { Link } from "react-router-dom"

function NavBar(){
// const [topics, setTopics] = useState([]);
// const [isLoading, setIsLoading] = useState(true)


    return(
        <section className="navbar">
            <p>Nav</p>
            <button><Link to={"/"}>Home</Link></button>
            <button>Users/login</button>
        </section>
    )
};
export default NavBar;