import Head from 'next/head';
import React, { useRef, useState, useEffect } from 'react';
import Router from 'next/router'
import { isMobile } from 'react-device-detect';


export default function lang() {
  const inputRef = useRef();
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const string = '<Glow-Search>'
  function handleSubmit(e) {
    e.preventDefault()
    const url = `https://www.google.com/search?q=${inputRef.current.value}`
    console.log(url);
    window.open(url,  "_blank");
  }

  function getTime() {
    let date = new Date();
    let hours = date.getHours();
    let mins = date.getMinutes();
    let seconds = date.getSeconds();
    let session = 'AM';
    
    
    if(hours == 0) {
      hours = 12;
    }
    
    if(hours > 12){
      hours = hours - 12;
      session = 'PM';
    }
    
    hours = (hours < 10) ? "0" + hours : hours;
    mins = (mins < 10) ? "0" + mins : mins;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    let currentTime = hours + ":" + mins + ":" + seconds + " " + session;
    setTime(currentTime);
  }

  useEffect(() => {
    setInterval(function(){ 
      getTime();
    }, 1000);
  })

  useEffect(() => {
    getTime();
    var d = new Date();
    d = `${d.getMonth() + 1}/${d.getDay() + 30}/${d.getFullYear()}`
    setDate(d);
  }, [])

  return (
    isMobile ? ( <center><h1>Mobile user restricted!!!</h1></center> ) :
    <div className='body'> 
      <Head>
        <meta property="og:title" content="<Glow-Search>" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://glowstik.ml/search" />
        <meta property="og:image" content="https://media.discordapp.net/attachments/771821245292609556/837489485797261322/Untitled_5.png?width=452&height=452" />
        <meta property="og:description" content="A custom search homepage made using google" />
      </Head>
      <section className='main'>
        <div className='wrapper'>
          <div className="flex-box">
            <h1 className="title">{string}</h1>          
            <form autocomplete="on" className="form-box" id="formsearch" className='searchGroup'onSubmit={handleSubmit}>
                <input autoFocus type='text' maxlength='255' ref={inputRef} className='searchBar' placeholder="Search" id="forminput"/>
            </form>
            <center>
              <h1 className='time'>{time}</h1>
              <h1 className='date'>{date}</h1>
              <a href="/">
                <button className="download" id='button'>Go Back</button>
              </a>
            </center>
          </div>
        </div> 
      </section>
      <style jsx>{`

        .flex-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .time{
          color: #fff;
          font-size: 50px;
        }
        .date{
          color: #fff;
          font-size: 50px;
        }
        .title {
          color: #fff;
          text-align: center;
          z-index: 10000000;
          font-size: 50px;
        } 
        .searchBar {
          font-family: inherit;
          width: 400px;
          border: 0;
          border-bottom: 3px solid #fff;
          outline: 0;
          font-size: 1.3rem;
          color: #fff;
          padding: 7px 0;
          background: transparent;
          transition: border-color 1s;
          transition: width 0.7s;
        }
        .searchBar:focus {
          padding-bottom: 6px;  
          color: #fff;
          border-width: 3px;
          border-bottom: 3px solid #fff;
          width: 700px;
          transition: border-color 1s;
          transition: 0.7s;
        }
        ::placeholder {
          color: #fff;
        }
        .download{
          border: 3px solid #fff;
          background-color: #fff;
          border-radius: 45px;
          color: #c471ed;
          width: 200px;
          height: 50px;
          font-size: 20px;
          padding-left: 15px;
          transition: 0.7s;
        }
        .download:hover{
          box-shadow:
          0 2.8px 2.2px rgba(0, 0, 0, 0.034),
          0 6.7px 5.3px rgba(0, 0, 0, 0.048),
          0 12.5px 10px rgba(0, 0, 0, 0.06),
          0 22.3px 17.9px rgba(0, 0, 0, 0.072),
          0 41.8px 33.4px rgba(0, 0, 0, 0.086),
          0 100px 80px rgba(0, 0, 0, 0.12);
          background-color: #fff;
          color: #c471ed;
          cursor: pointer;
        }
        .wrapper {
            width: 100%;
            height: 100%;
            position: absolute;
            background: linear-gradient(45deg,#c471ed, #f64f59);
            background-size: 600% 100%;
            animation: gradient 5s linear infinite;
            animation-direction: alternate;
            border-bottom: 20px solid #141414;
          }
        @keyframes gradient {
          0% {background-position: 0%}
          100% {background-position: 100%}
        }
      `}</style>
    </div>
  )
}
