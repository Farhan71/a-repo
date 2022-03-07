import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import AccPosts from "../categories/accomodation/AccPosts";
import BldPosts from "../categories/blood/BldPosts";
import OtherThings from "../categories/otherThings/OtherThingsPosts";
import RptPosts from "../categories/reports/RptPosts";
import EntPosts from "../categories/entrepreneur/EntPosts";
import BookPosts from "../categories/book/BookPosts"


export default function Home() {
  const [posts, setPosts] = useState([]);
  // const { search } = useLocation();
  let [filter, setFilter] = useState("");
    const [filterPosts, setFilterPosts] = useState([]);
    console.log(filter)
    

    useEffect(() => {
      const fetchFilterPosts = async () => {
        if (filter === "blood") {
          const res = await axios.get(`/blood`);
          setFilterPosts(res.data)
        }
        
        else if (filter === "accommodations") {
          const res = await axios.get(`/accommodations`);
          setFilterPosts(res.data)
        }

        else if (filter === "books") {
          const res = await axios.get(`/books`);
          setFilterPosts(res.data)
        }
        else if (filter === "reports") {
          const res = await axios.get(`/reports`);
          setFilterPosts(res.data)
        }
        else if (filter === "otherThings") {
          const res = await axios.get(`/otherThings`);
          setFilterPosts(res.data)
        }
        else if (filter === "entrepreneur") {
          const res = await axios.get(`/entrepreneur`);
          setFilterPosts(res.data)
        }
        
      };
      fetchFilterPosts();
      console.log(filter)
    },[filter])
    console.log(filterPosts)
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts" + search);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [search]);
  // randerComponent(params)

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/accommodations");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
      <label for="Category">Choose a Category:</label>
                    <select onChange={(e) =>  {
                      filter="";
                      setFilter(e.target.value)    
                    }               
                    } name="Category" id="Category">
                      <option value="accommodations">Accommodations</option>
                      <option value="blood"> Blood Finding</option>  
                      <option value="entrepreneur">Entrepreneur</option>
                      <option value="otherThings">Accesories</option>
                      <option value="reports">Reports</option>
                      <option value="books">Books</option>                    
                    </select>      
        { filter ? (
          {
            'accommodations' : <AccPosts posts={filterPosts}></AccPosts>,
            'blood' : <BldPosts posts={filterPosts}></BldPosts>,
            'entrepreneur' : <EntPosts posts={filterPosts}></EntPosts>,
            'otherThings' : <OtherThings posts={filterPosts}></OtherThings>, 
            'reports' : <RptPosts posts={filterPosts}>,</RptPosts>,
            'books' : <BookPosts posts={filterPosts}></BookPosts>
          }[filter] ) : <AccPosts posts={posts} ></AccPosts>
        }      
      </div>
    </div>
  );
}
