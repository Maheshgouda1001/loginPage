export default function Showerror(error)
{
document.querySelector(".messagetext").textContent = error;
var popupContainer = document.querySelector(".popupMessagecontainer");
popupContainer.classList.add("show");
setTimeout(function() {
  popupContainer.classList.remove("show");
}, 2000);

}

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const GetData = () => {
//   // State to store the fetched data
//   const [data, setData] = useState([]);

//   // Function to fetch data using Axios
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setData(response.data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   // Call fetchData on component mount
//   useEffect(() => {
//     fetchData();
//   }, []);

//   return data;
// };