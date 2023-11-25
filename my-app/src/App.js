import logo from './logo.svg';
import JsxParser from 'react-jsx-parser'
import './App.css';
import React, {useState} from "react";

//load all the plugins/jsx files that we need


const App = () => {
  const [loaded, setLoaded] = useState(false);
  async function loadPlugin() {
    const dynamicHtml = await fetch("http://localhost:3000/module1.jsx");
    //console.log(dynamicHtml);
    return dynamicHtml.text();
  }
  
  loadPlugin().then((data)=> {
    setLoaded(data);
  });

  return  ( <>
    {loaded ? null : <h1>Loading</h1>}
    <h1>My App</h1>
    <JsxParser  
    //passing props from the mother ship into the child module
      bindings={{
        foo: 'bar'
      }}
     jsx={loaded}  />
    </>
  );
}
 

export default App;
