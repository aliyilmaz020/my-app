// import logo from './logo.svg';
import './App.css'
import TopBar from './components/TopBar'
import SecondBar from "./components/SecondBar"
// import ThirdBar from "./components/ThirdBar"

export default function App() {
  return (
    <div className="App">
        <TopBar />
        <hr/>
        <SecondBar />
        {/* <ThirdBar/> */}
      </div>
  );


}


