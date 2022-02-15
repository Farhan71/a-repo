import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";
import AccPosts from "../categories/accomodation/AccPosts";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts" + search);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, [search]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/accommodations" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <div className="container">
      <Header />
      <div className="home">
 
        <ul class="main-nav main-nav__level1">
              <li class="main-nav__level1-item"><a href="#" className="main-nav__level1-link">Sort by</a>
                  <ul class="main-nav__level2">
                      <li class="main-nav__level2-item main-nav__sub-item"><a href="#" className="main-nav__level2-link">Accommodation</a></li>
                      <li class="main-nav__level2-item main-nav__sub-item"><a href="#" className="main-nav__level2-link">Bloods</a></li>
                      <li class="main-nav__level2-item main-nav__sub-item"><a href="#" className="main-nav__level2-link">Recycle Bin</a>
                          <ul class="main-nav__level3">
                              <li class="main-nav__level3-item main-nav__sub-item"><a href="#" className="main-nav__level3-link">Books</a></li>
                              <li class="main-nav__level3-item main-nav__sub-item"><a href="#" className="main-nav__level3-link">Accessories</a></li>
                          </ul>
                      </li>
                      <li class="main-nav__level2-item main-nav__sub-item"><a href="#" className="main-nav__level2-link">Entrepreneurs</a></li>
                      <li class="main-nav__level2-item main-nav__sub-item"><a href="#" className="main-nav__level2-link">Reports</a></li>
                  </ul>
              </li>
          </ul>

        {/* <Posts posts={posts} /> */}
        {/* {posts.map(post =>( <>
          <p>{post.location}</p> &nbsp;
        </>
         
        ))} */}
        {/* <AccPosts posts={posts} ></AccPosts> */}
        <Sidebar />
      </div>
    </div>
  );
}
