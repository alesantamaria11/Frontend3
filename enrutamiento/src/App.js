import React from 'react';
import { Routes, Route } from "react-router-dom";
// import Expenses from "./routes/expenses";
import Home from './routes/home';
// import Invoices from "./routes/invoices";
import NotFound from './routes/notfound';

export default function App() {
  return (
    <div>
      <h1>TODO BIEN</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        
        <Routes>
          {/* <Route path="/" element={<Home/>}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
          </Route> */}

            <Route exact path='/' element={<Home></Home>}></Route>
            <Route element={<NotFound></NotFound>}></Route>

        </Routes>
      </nav>
    </div>
  );
}
