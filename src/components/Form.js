import React from "react";

export default function Form() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    imgUrl: "",
  });
  const [memes, setMemesData] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then((res) => res.json())
      .then((data) => setMemesData(data.data.memes));
  }, []);

  function handleClick() {
    const random = Math.floor(Math.random() * memes.length);
    const url = memes[random].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      imgUrl: url,
    }));
  }
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <div className="form">
      <span className="inputs">
        <input
          className="topInput"
          placeholder="Top Line"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          className="bottomInput"
          placeholder="Bottom Line"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </span>
      <button onClick={handleClick} className="generate">
        Get a new meme image 😂
      </button>
      <div className="meme">
        <img src={meme.imgUrl} alt="" className="image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
