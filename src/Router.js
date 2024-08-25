import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom"
import WelcomePage from "./WelcomePage";

function Router(){

return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={WelcomePage}/>
  </Routes>
  </BrowserRouter>
)

}
export default Router();