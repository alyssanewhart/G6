import {Page, Layout, EmptyState, Banner} from "@shopify/polaris";
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import Router from 'next/router';
import { TextField } from '@shopify/polaris';
import React, { useCallback, useState } from "react";
import Lists from "../pages/List";
import "../components/css/searchBar.module.css";

export default function FAQ(){
    const [value, setValue] = useState('');

    const handleChange = useCallback((newValue) => setValue(newValue), []);

    return (
       <TextField
            label="Store name here"
            value={value}
            onChange={handleChange}
            autoComplete="off"
       />
    );
}

/*function FAQBuild(){
        const [inputText, setInputText] = useState("");
        let inputHandler = (e) => {
            //converting text to lowercase- eassier to filter
            var lowerCase = e.target.value.toLowerCase();
            setInputText(lowerCase);
        }; 
        return(
            <div className="main">
                <h1>Search FAQ</h1>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        fullWidth
                        onChange={inputHandler}
                        />
                </div>            
                <Lists input={inputText}/> 
            </div>
        );
    }

class FAQ extends React.Component{
    render() {
        return (
            <div>
                <FAQBuild />
            </div>
        );
    }
}

export default FAQ; */
    /*render(){

       <List input={inputText} />

    const [query, setQuery] = useState("")
        return(
            
           <><div className="main">
                <h1>Search FAQ</h1>
                <div>
                    <input placeholder='Enter Question' onChange={event => setQuery(event.target.value)}/>
                    {
                       Data.map((post, index) => {
                            <div key={index}>
                                <p>{post.question}</p>
                                <p>{post.answer}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='list'>
                {Data.map((post) => (
                    <div className='list' key={post.id}>
                    <p>{post.question}</p>
                    <p>{post.answer}</p>
                </div>
                ))}  
                </div > </> 
        );
    }*/
