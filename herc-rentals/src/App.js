import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
const   sql                 = require('mysql'),
        dropTables          = require('./src/db_files/drop_tables'),
        populateTables      = require('./src/db_files/populate_tables'),
        createTables        = require('./src/db_files/create_tables'),
        queryTables         = require('./src/db_files/query_tables');

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
