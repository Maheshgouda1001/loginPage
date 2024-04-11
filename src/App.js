import back from './images/lastpage.png';
import invaliderror from './images/invalid.png';
import logo from './images/logo.png';
import sideimage from './images/hero-img-cropped.png';
import './App.css';
import React ,{ useState } from 'react';
import { Login } from './apicall.js';
import  { token }  from './apicall.js';

function App() {
let [emailid,Setemailid]=useState("");
let [Password,Setpass]=useState("");
let [emailverify,setboolean]=useState(false);
const Handlechange=(e)=>{
  Setemailid(e.target.value)
  if(e.target.value == "")
  {
    setboolean(true);
  }
  else
  {
    setboolean(false);
  }
}
const submitcredentials= ()=>
{
  if(emailid !="")
  {
    setboolean(false);
    token.then(Token=>{
    Login(Token,emailid,Password);
   })
  }
  else
  {
    setboolean(true);
  }
}
  return (
    <>
      <div><img src={back} alt="" className="back" width="32px"/></div>
    <div className="containersection"><div style={{padding: '80px 50px'}} className="sideimage"><img src={sideimage} alt="" style={{width: '100%',height: '100vh'}}/></div><div  className="full-height bg-white height-100" style={{paddingTop: '100px',maxWidth: '600px'}}>
        <div style={{width:'90%'}} className="popupMessagecontainer"><img src={invaliderror} alt="" style={{marginRight:'10px',width:'25px'}}/><p className="messagetext">Invalid login credentials</p>
        </div>
        <div className="text-center"><img  alt="" className="img-responsive inline-block margin-top-logo" src={logo} width="150"/></div>
        <div  className="mt-10 pdd-horizon-70 margin-top-logo">
            <div  className="table-cell"><div  className="pdd-horizon-15"><h2 >Login</h2><p  className="mrg-btm-15 font-size-13">
                Please enter your userid and password to login</p><form className="ng-pristine ng-invalid ng-touched"><div  className="form-group">
                    <input  className="form-control ng-pristine ng-invalid ng-touched useremailid" name="emailid" placeholder="User id" required="" value={emailid} onChange={Handlechange} type="email"/>
        {emailverify && <div  className="text-danger enterpassword"><span >userid is required</span></div>}
        </div><div  className="form-group eye-position">
            <input  apppassword="" className="form-control ng-untouched ng-pristine ng-invalid password" name="password" placeholder="Password" value={Password} required="" onChange={(e)=>{Setpass(e.target.value)}} type="password"/>
            <span className="fa fa-fw fa-eye field-icon" style={{top:'15px',position:'absolute', right:'4px'}}></span>
      </div><div  className="pull-right"><a href="https://adminportal.metromitra.co.in/#/juurideadmin/authentication/forgot-password" className="text-info pointer forgot-text">Forgot Password?</a></div><div  className="pull-right px-4"><a href="https://adminportal.metromitra.co.in/#/juurideadmin/authentication/forgot-userid" className="text-info pointer forgot-text">Forgot UserId?</a>
    </div></form><button  className="btn btn-info" onClick={submitcredentials}>Login</button></div></div></div>
    </div></div>
    </>
  );
}

export default App;
