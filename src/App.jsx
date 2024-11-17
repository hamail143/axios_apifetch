import { useState, useEffect } from "react";

import axios from 'axios';  // Correctly import axios

const App = () => {
  const [myData, setMyData] = useState([]); // State for storing API data
  const [isError, setIsError] = useState(""); // State for storing error message

  // Function to fetch data using Async/Await

  const getMyPostData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message); // Capture the error message
    }
  };

  // Call the function once the component mounts
  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <h1>Axios Tutorial</h1>
      {isError && <h2>{isError}</h2>}  {/* Show error if any */}

      <div className="grid">
        {myData.slice(0, 9).map((post) => {
          const { body, id, title } = post;
          return (
            <div key={id} className="card">
              <h2>{title.slice(0, 15).toUpperCase()}</h2>  {/* Show only part of the title */}
              <p>{body.slice(0, 100)}</p>  {/* Show part of the body */}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
