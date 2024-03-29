import Form from "./components/Form";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Header
        imgSrc="troll.png"
        title="Meme Generator"
        subHeading="React Course - Project 3"
      />
      <Form />
    </div>
  );
}

export default App;
