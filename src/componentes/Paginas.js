import React from 'react'
import { Switch, Route  } from "react-router-dom";
import { Inicio } from "./inicio/index";
import { ProductoLista } from "./Productos/index";

export const Paginas = () => {
  return (
    <section>
    <Switch>
     <Route path='/' exact component={Inicio} />
     <Route path='/productos' exact componet={ProductoLista} />


    </Switch>
    

    </section>



  )
}

