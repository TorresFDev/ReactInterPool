import NavBar from "./components/NavBar.jsx";
import './App.css';
import  Carrousel  from "./components/Carrousel.jsx"
import Show from "./components/Show.jsx";
import Crear from "./components/Crear.jsx"
import EditSesion from "./components/Gallery.jsx"
import { BrowserRouter,Routes,Route } from "react-router-dom";

// export default function App() {
//   return (

    
//     <>
//     <NavBar/>
//     <Carrousel/>
//     {/* <Show/> */}
//     </>
//   );
// }


function App() {
  return (
    <div className="App">
<BrowserRouter>
<>
    <NavBar/>
    <Carrousel/>
    <EditSesion/>
</>

<Routes>
  <Route path="/" element={<Show/>}/>
  <Route path="/create" element={<Crear/>}/>
{/*   <Route path="/edit/:id" element={<Edit/>}/> */}
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;