import React from "react";
import "./PearlGenerator.css";
import { useState } from "react";
import pearlCheck from "./PearlCheck";
import { SuccessfulPearl } from "./SuccessfulPearl";
import myGif from "./WPword_earl.gif";
import myGif2 from "./WPpearlie.gif";
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { getOysterById, getPoem, postPearl, putOyster } from "../Utils/apis";


const PearlGenerator = () => {
  const { user } = useContext(UserContext)
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("")
  const [pearl, setPearl] = useState(false);
  const [poem, setPoem] = useState([]);

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z\s]/gi, "");
    setMessage(result);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = (event) => {
    if(user.id === undefined){
      alert('Please sign in to post') 
      return;
    }
    if(title === '' || message === ''){
      alert('Please complete both boxes')
    }
    event.preventDefault();
    if(pearlCheck(message).length === 0) {
      postPearl({
      "title": title,
      "body": message,
      "username": user.id,
      "created_at": "2022-11-18",
      "votes": 0
    }).then((res) => {
    })
    getOysterById(user.id).then((res) => {
      putOyster(user.id, (res.points + 10))
    }).then(() => {
    })
    setPearl(true);
    }
  };

  const handleClickPoem = () => {
    getPoem().then((res) => {
    setPoem(res)
    });
  }

  if (pearl === false) {
    return (
      <div className="pearlGenerator">
        <h2 className="pearlGenerator">Create a Pearl !</h2>
        <form>
          <textarea type="text" name="title" id="title" cols="50" rows="1" onChange={handleChangeTitle} placeholder="title"></textarea>
          <br />
          <img
          src={myGif}
          alt={"my-gif"}
          style={{ width: "200px", height: "200px" }}
        />
          <textarea type="text" name="message" id="message" cols="50" rows="12" value={message} onChange={handleChange} placeholder="pearl"></textarea>
          <img
          src={myGif2}
          alt={"my-gif2"}
          style={{ width: "200px", height: "200px" }}
        />
          <br />

          <button id="pgsubmit" onClick={handleSubmit}>Submit</button>
          <p id="oddLetters">
            {" "}
            These letters need a counterpart to make them an even pair:{" "}
            {pearlCheck(message)}{" "}
          </p>
        </form>
        <p>
          A Pearl is a poem with a particular set of rules, for a poem to be a
          Pearl it needs to have an equal number of each letter used in the
          poem. You will not be able to use numbers or special characters in the
          text field. You will have a Pearl when there are no Odd Letters
          displayed. Good Luck!
        </p>
        <button onClick={handleClickPoem} >Inspire Me</button>
       {poem.length > 0 ? <div>
        <ul>
          <br />
          <li>Title: {poem[0].title}, Author: {poem[0].author}</li>
          <br />
          <li>{poem[0].lines.slice(0, 10)}</li>
        </ul>
        </div> : <></>}
      </div>
    );
  } else {
    return (
      <div>
        <SuccessfulPearl message={message} />
      </div>
    );
  }
};
export default PearlGenerator;