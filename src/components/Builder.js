import Header from "../Header";
import Footer from "../Footer";
import UserBuild from "./UserBuild";
import '../css/Builder.css';
import pc_photo from '../css/photo1.webp';
import photoComponent from '../css/memmory.webp';
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function Builder() {
    const [list, setList] = useState([]);
    const [cards, setcards] = useState([]);
    const [psu, setPsu] = useState([]);
    const [memmory, setMemmory] = useState([]);
    const [processor, setProcessor] = useState([]);
    const [cooler, setCooler] = useState([]);
    const [storage, setStorage] = useState([]);
    const [os, setOs] = useState([]);
    const [userBuildProps, setUserBuildProps] = useState([]);
    useEffect(() => {
        Axios.get("http://localhost:3002/api/getCards").then((data) => {
            setcards(data.data)
        });
        Axios.get("http://localhost:3002/api/getProcessors").then((data) => {
            setProcessor(data.data)
        });
        Axios.get("http://localhost:3002/api/getMemmory").then((data) => {
            setMemmory(data.data)
        });
        Axios.get("http://localhost:3002/api/getCooler").then((data) => {
            setCooler(data.data)
        });
        Axios.get("http://localhost:3002/api/getPSU").then((data) => {
            setPsu(data.data)
        });
        Axios.get("http://localhost:3002/api/getOS").then((data) => {
            setOs(data.data)
        });
        Axios.get("http://localhost:3002/api/getStorage").then((data) => {
            setStorage(data.data)
        });

    }, [])
    function setProcessorList() {
        console.log("you clicked processors");
        setList(processor);
    }
    function setPsuList() {
        console.log("you clicked psu");
        setList(psu);
    }
    function setCardsList() {
        console.log("you clicked cards");
        setList(cards);
    }
    function setMemmoryList() {
        console.log("you clicked memmory");
        setList(memmory);
    }
    function setOsList() {
        console.log("you clicked os");
        setList(os);
    }
    function setStorageList() {
        console.log("you clicked storage");
        setList(storage);
    }
    function setCoolerList() {
        console.log("you clicked Cooler");
        setList(cooler);
    }
    function isEqual(obj1,obj2){
        return obj1.category === obj2.category;
    }
    function containsObject(array, object) {
        return array.some(function (element) {
          return isEqual(element, object);
        });
      }
    function updateUserBuild(val) {
        console.log("===========");
        console.log("adding " + val.title);
        if(!containsObject(userBuildProps,val)){
            setUserBuildProps([
            ...userBuildProps,
            val
          ]);
          console.log("added " + val.title);
        }else{
            let newArr=userBuildProps.map((obj) => {
                
                if (obj.category === val.category) {
                       console.log("return ===");
                console.log(obj.title);
                console.log(val.title);
                  return  val ;
                }
                return obj;
              });
              setUserBuildProps(newArr);
               console.log("replaced")
        }
    }
    return (
        <div>
            <Header></Header>
            <div class='builder-container'>
                <div class='column1'>
                    <img src={pc_photo}></img>
                    {
                       userBuildProps=== undefined?(<p>Total price</p>):
                       (
                        
                        <p>
                        Total price: {100+userBuildProps.reduce((total, obj) => {
                          return total + obj.price;
                        }, 0)} 
                      </p>
                       )

                    }
                    {
                       userBuildProps=== undefined?(<p>Components price</p>):
                       (
                        
                        <p>
                        Components price: {userBuildProps.reduce((total, obj) => {
                          return total + obj.price;
                        }, 0)}$
                      </p>
                       )

                    }
                    <p>Build Fee :100 $</p>
                    <button class='orderButton'>Order</button>
                </div>
                <div class='column2'>
                    <div class='componentsFilter' >
                        <button onClick={setCardsList}>Graphics Card</button>
                        <button onClick={setProcessorList} >Processor</button>
                        <button onClick={setMemmoryList} >Memmory</button>
                        <button onClick={setCoolerList} >Cooler</button>
                        <button onClick={setOsList} >Operating Sistem</button>
                        <button onClick={setStorageList} >Storage</button>
                        <button onClick={setPsuList} >Power Supply</button>
                    </div>
                    {list.map((val, key) => {
                        return (
                            <div class='componentSelect' >
                                <img src={photoComponent} ></img>
                                <span >{val.title + ':  ' + val.price + '$'} </span>
                                <button onClick={e => {
                                    updateUserBuild(val);
                                }}>select</button>
                            </div>
                        )
                    })}
                </div>
                <UserBuild data={userBuildProps}></UserBuild>
            </div>
            <Footer></Footer>
        </div>
    );

}
export default Builder;