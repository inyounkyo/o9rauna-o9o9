import React from "react";
import { useState } from "react";
import { Children } from 'react';

const Category = ({children}) => {
  const result = [];
  
  Children.forEach(children, (child, index) => {
    result.push(child);
    result.push(<hr  key={index}/>);
  })
  result.pop();
  return result;
};

const Home = () => {
  return (
    <>
      <Category>
        <p>This is the first item.</p>
        <p>This is the second item.</p>
        <p>This is the third item.</p>
      </Category>
    </>
  );  
};

export default Home;
