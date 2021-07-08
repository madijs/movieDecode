import './App.css';
import Header from "./components/Header";
import {
    Route
} from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path={'/'} render={()=><MainPage/>}/>
      {/*<Route exact path={'/movie/:id'} render={()=><MovieDetail/>}/>*/}
    </div>
  );
}

export default App;
