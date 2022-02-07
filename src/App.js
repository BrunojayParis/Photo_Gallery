import "./App.css";
import React, {useState, useEffect} from 'react';
import Card from './components/Card';
import axios from "axios";

function App() {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState('')

  useEffect(() => {
    axios.get(`https://pixabay.com/api/?key=25586356-b53de271deeb82ccc4ddccaa8&q=${term}&image_type=photo`)
      .then(function (response) {
        // handle success
        console.log(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, []);
  return (
    <div className= "px-6">
      <Card/>
    </div>
  );
}

export default App;
