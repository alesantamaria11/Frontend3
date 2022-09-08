import React from 'react';
import { Routes, Route } from "react-router-dom";
import Expenses from "./routes/expenses";
import Home from './routes/home';
import Invoices from "./routes/invoices";

export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="expenses" element={<Expenses />} />
            <Route path="invoices" element={<Invoices />} />
          </Route>
        </Routes>
      </nav>
    </div>
  );
}
