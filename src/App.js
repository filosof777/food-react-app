import "./App.scss";
import './assets/styles/main.scss';
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Header from "./container/Header/Header";
import Home from "./pages/home/Home";
import classes from './App.module.scss';
import Notification from "./pages/notification/Notification";

function App() {
  return (
    <div className={classes.App}>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
