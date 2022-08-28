import "./App.css";
import { TypeAnimation } from 'react-type-animation';

function App() {

  const typedText = ["Full Stack Developer",1500,"Front-end Developer",1500, "MERN Developer",1000];

  return (
    <div className="App">
      <TypeAnimation
        sequence={typedText}
        style={{ fontSize: "2em" }}
        wrapper="h2"
        repeat={Infinity}
      />
    </div>
  );
}

export default App;
