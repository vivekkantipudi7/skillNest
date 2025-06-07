import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_51RWXosSCKGur11fhDGtsU6dO5mrI5XZ9f1iDIMbdGhb50wNVZEYrdaRJ3u72CIEtclrf17AK8KUnwsN4HSIx5wOw00O64qHC2O");

createRoot(document.getElementById("root")).render(
  <Elements stripe={stripePromise}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Elements>
);
