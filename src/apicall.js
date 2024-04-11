import React, { useState, useEffect } from "react";
import axios from "axios";
import Showerror from './APi.js'


var env="dev";
//var env="prod";
var base_url = 'https://dev.juuride.com/';
//var base_url = "https://microservices.metromitra.co.in/";
export const token=MyComponent();
async function MyComponent() {
    var token;
        try {
          const response = await fetch('https://dev.juuride.com/jmdevnwebtokens_jwt/jmdevnwebtokens/generate_jwt', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "emailid": "jittupant12@gmail.com",
                "password": "1234"
              })
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          token=data.token;
        } catch (error) {
        } finally {
        }
    return token;
  }

  export const Login = (Token,email,pass) =>
  {
    function fetchData()
    {
      try {
        const response = axios.post(base_url + "jm"+env+"nusrlogin_jwt/jmdevnusrlogin/user/login",JSON.stringify({
                "emailid": email,
                "password": pass
              })
          ,{
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${Token}`,
              'Content-Type': 'application/json'
            }}).then(response=>{
                if (response.status === 200)
                {
                    console.log("Hii");
                    localStorage.setItem("userinformationmetromitra",JSON.stringify(response.data));
                    window.location.href="/Devindex.html";
                }
            })
            .catch(error =>{
                if (error.response) {
                    if (error.response.status === 400 && error.response.data && error.response.data.message) {
                    Showerror(error.response.data.message);
                    }
                  } else if (error.request) {
                    console.error('No response received:', error.request);
                  } else {
                    console.error('Error:', error.message);
                  }
            })
            // if (!response.ok) {
            //     debugger
            //     throw new Error(response);
            //   }
              console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

      fetchData();
}

