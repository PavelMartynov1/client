import '../css/Builder.css';
import React, { useState } from 'react'
import photoComponent from '../css/memmory.webp';

function UserBuild({ data }) {
    function containsCategory(array, category) {
        if(data === undefined){
            console.log("empty array");
            return false;
        }
        else{
            console.log("not empty array");
        return array.some(function (element) {
            return element.category === category;
         // return isEqual(element, object);
        }); 
    }
      }
    return (
        <div class='column3'>Your Build
           <div class='componentSelect' >
                <img src={photoComponent} ></img>
        
                {
               containsCategory(data,"cards")  ? (<span>{data.filter( d => d.category==='cards')[0].title}</span>) :(<span></span>) 
                }
            </div>
            <div class='componentSelect' >
                <img src={photoComponent} ></img>
                
                {
                containsCategory(data,"processor")  ? (<span>{data.filter( d => d.category==='processor')[0].title}</span>) :(<span></span>) 
                }
            </div>
            <div class='componentSelect' >
                <img src={photoComponent} ></img>
                
                {
                containsCategory(data,"Memmory")  ? (<span>{data.filter( d => d.category==='Memmory')[0].title}</span>) :(<span></span>) 
                }
            </div>
            <div class='componentSelect' >
                <img src={photoComponent} ></img>
                
                {
                containsCategory(data,"psu")  ? (<span>{data.filter( d => d.category==='psu')[0].title}</span>) :(<span></span>) 
                }
            </div>
            <div class='componentSelect' >
                <img src={photoComponent} ></img>
                
                {
                containsCategory(data,"storage")  ? 
                (<span>{data.filter( d => d.category==='storage')[0].title}</span>) :(<span></span>) 
                }
            </div>
            <div class='componentSelect' >
                <img src={photoComponent} ></img>
                
                {
                containsCategory(data,"os")  ? (<span>{data.filter( d => d.category==='os')[0].title}</span>) :(<span></span>) 
                }
            </div>
            <div class='componentSelect' >
                <img src={photoComponent} ></img>
                
                {
                containsCategory(data,"cooler")  ? (<span>{data.filter( d => d.category==='cooler')[0].title}</span>) :(<span></span>) 
                }
            </div>
            
        </div>);
}
export default UserBuild;