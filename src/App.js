import { Routes, Route } from "react-router-dom"
import Flames from "./component/flames/flames";
import Success from "./component/success/success";
import Friend from "./component/structure/friends";
import Enemy from "./component/structure/enemy";
import Lover from "./component/structure/lovers";
import Couple from "./component/structure/couples";
import Affection from "./component/structure/affection";
import Sister from "./component/structure/sister";


function App() {
 return(
  <div className="App">
     <Routes>
     <Route path="/" element={<Flames/>} />
     <Route path="/success" element={<Success/>} />
     <Route path="/enemy" element={<Enemy/>} />
     <Route path="/friend" element={<Friend/>} />
     <Route path="/lover" element={<Lover/>} />
     <Route path="/couple" element={<Couple/>} />
     <Route path="/affection" element={<Affection/>} />
     <Route path="/sister" element={<Sister/>} />
     </Routes>
  </div>

 )
}

export default App;
