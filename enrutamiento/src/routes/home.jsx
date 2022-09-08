import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
    return (
      <div>
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </div>
    );
  }