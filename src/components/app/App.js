import { MystyleContext } from "../../Module";
import SignUp from "../SignUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "../Welcome/Index";
import Home from "../Home";
import StepOne from "../StepOne";
import CreatePasssword from "../CreatePasssword";
import { useMemo, useRef } from "react";
import StepTwo from "../StepTwo";
import StepThree from "../StepThree";
import Paiement from "../Paiement";
import ErrorPage from "../Error";
import "../../style/style.css";

export function App() {
  const style = useMemo(()=>{
    return{

      border: "none",
      backgroundColor: "#e30813",
      color: "white",
      padding: "5px 10px",
      borderRadius: "5px",
      fontSize: "1rem",
      outline: 'none'
    }
  })
  const refHome = useRef(null);

  return (
    <div className="App ">
      <div className="containers">
        <Router>


          <MystyleContext.Provider value={style}>
            <Routes>
              <Route path="/welcome" element={<Welcome />} />
              <Route path="/connexion" element={<SignUp />} />
              <Route path="/" element={<Home />} />
              <Route path="/signup/regform" element={<CreatePasssword />} />
              <Route path="/signup/registration" element={<StepOne />} />
              <Route path="/signup" element={<StepTwo />} />
              <Route path="/signup/planform" element={<StepThree />} />
              <Route path="/paiement" element={<Paiement />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </MystyleContext.Provider>
        </Router>
      </div>
    </div>
  );
}
export default App
