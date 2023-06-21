import './css/Header.css';
import SearchBar from '../src/components/SearchBar';
import React, {useState,useEffect } from 'react'
import Axios from 'axios'
function  Header(){
    const [parts,setParts]=useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3002/api/get").then((data) => {
           
            setParts(data.data);
        });
    }, [])
    
    return(
    <header>
        <ul>
  <li><a href="#build">Build PC</a></li>
  <li><a href="#bestSellers">Best Sellers</a></li>
  <li><a href="#support">Support</a></li>
  <li><a href="#about">About us</a></li>
  <SearchBar data={parts}></SearchBar>
  <li style={{ float: "right" }}><a  href="#profile">Profile</a>
  </li>
  <li style={{ float: "right" }}><a  href="#ShoppingCart">ShoppingCart</a>
  </li>
</ul>
    </header>
    )
    
}
export default Header;