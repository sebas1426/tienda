import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./componentes/Paginas";

function App() {
  return (
    <body className="body">
    <div className="App">

     <h1> </h1>
       <Router>
     <Header/>
     <Paginas/>
     </Router>
      </div>
      </body>
  );
}

export default App;