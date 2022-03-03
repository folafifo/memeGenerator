import memesData from "../memesData";
import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "",
  });
  const [memes, setMemesData] = React.useState(memesData);
  function handleClick() {
    const random = Math.floor(Math.random() * memesData.data.memes.length);
    const url = memesData.data.memes[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: url,
    }));
  }

  return (
    <div className="form">
      <span className="inputs">
        <input className="topInput" placeholder="Top Line" />
        <input className="bottomInput" placeholder="Bottom Line" />
      </span>
      <button onClick={handleClick} className="generate">
        Get a new meme image 😂
      </button>
      <img src={meme.imgUrl} alt="" className="image" />
    </div>
  );
}
