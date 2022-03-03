export default function Header(props) {
  return (
    <div className="Header">
      <img src={require(`./images/${props.imgSrc}`)} className="troll" alt="" />
      <h2 className="title">{props.title}</h2>
      <h4 className="sub-heading">{props.subHeading}</h4>
    </div>
  );
}
