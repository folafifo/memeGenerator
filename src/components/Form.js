export default function Form() {
  return (
    <div className="form">
      <span className="inputs">
        <input className="topInput" placeholder="Top Line" />
        <input className="bottomInput" placeholder="Bottom Line" />
      </span>
      <button className="generate">Get a new meme image 😂</button>
    </div>
  );
}
