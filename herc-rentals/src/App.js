import './App.css';
import 'babel-polyfill';
import React, { useState, useEffect } from "react";
import axios from "axios";
const connection = require('./db_files/db_connection');

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("/api/data");
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>My MySQL Data</h1>
      <button onClick={() => fetchData()}>Fetch Data</button>
      <button>Button 2</button>
      <button>Button 3</button>
      <button>Button 4</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
