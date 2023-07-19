import ImageZoom from "./components/ImageZoom/";
import brazil from "./assets/images/brazil.jpg";

function App() {
  return (
    <div>
      <ImageZoom imagePath={brazil} imageDescription="City of Rio de Janeiro"/>
    </div>
  );
}

export default App;
