import Competitors from "./components/competitors/Competitors";
import Header from "./components/header/header";
import VoteModal from "./components/modal/VoteModal";
import Timer from "./components/timer/Timer";
function App() {
  return (
    <div className="App">
      <Header />
      <Timer />
      <Competitors />
      <VoteModal />
    </div>
  );
}

export default App;
