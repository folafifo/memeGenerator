export default function Form() {
  function handleClick() {
    console.log("CLICKED");
  }
  function Hovered() {
    console.log("HOVER");
  }
  return (
    <div className="form">
      <span className="inputs">
        <input className="topInput" placeholder="Top Line" />
        <input
          onMouseEnter={Hovered}
          className="bottomInput"
          placeholder="Bottom Line"
        />
      </span>
      <button onClick={handleClick} className="generate">
        Get a new meme image 😂
      </button>
    </div>
  );
}
