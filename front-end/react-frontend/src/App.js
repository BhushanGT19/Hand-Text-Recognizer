import "./index.css";
import Profile from "./components/Camera";
import Kb from "./components/Kb";
import Header from "./components/Header";
import Upload from "./components/Upload";

function App() {
  return (
    <div className="App">
      <div>
        {/* display header  */}
        <Header />

        <div className="content">
          <Upload />
        </div>

        {/* upload options */}
        {/* or */}
        {/* show output with keyboard integration */}
      </div>
    </div>
  );
}

export default App;
