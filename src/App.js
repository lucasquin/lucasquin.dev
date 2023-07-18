import "./App.css";
import BackgroundImageZoom from "./components/BackgroundImageZoom/BackgroundImageZoom";
import brazil from "./assets/images/brazil.jpg";

function App() {
  return (
    <div>
      <BackgroundImageZoom imagePath={brazil} imageDescription="City of Rio de Janeiro"/>
    </div>
  );
}

export default App;
