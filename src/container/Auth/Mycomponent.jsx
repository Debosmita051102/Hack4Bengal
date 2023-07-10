import React, { useEffect, useState } from "react";
import { makeAuthenticatedRequest } from "./Auth";

export default function MyComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make an authenticated API request when the component mounts
    makeAuthenticatedRequest("/api/data", "GET")
      .then((response) => {
        // Handle the response data
        setData(response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, []);

  return (
    <div>
      {/* Render the fetched data */}
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
