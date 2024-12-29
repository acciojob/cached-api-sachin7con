//SGN, ONSPN, JSSR, JBB, JSLV, JMD, JSM, JSSR, JSRK, JMD
import "regenerator-runtime/runtime"; // Import at the top

import React, { useState, useMemo, useEffect } from "react";
import axios from "axios";
import './../styles/App.css';

const App = () => {
     const [fetchedData, setFetchedData] = useState([]);
     const [loading, setLoading] = useState(true);

  
   const memoizedData = useMemo(() => {
        return fetchedData;
   }, [fetchedData]);
     
   useEffect(() => {
    const fetchingData = async () => {
      setLoading(true);
      try {
        const fetchData = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        setFetchedData(fetchData.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchingData();
  }, []);

  return (
    <div>
      {/*ONS Do not remove the main div */}
      <ul>
        {loading ? (<p>Loading...</p>) : (memoizedData.map((fd, id) => (
          <li key={id}><h4>{fd.title}</h4> <p>{fd.body}</p></li>
        )))}
      </ul>
    </div>
  );
};

export default App;
