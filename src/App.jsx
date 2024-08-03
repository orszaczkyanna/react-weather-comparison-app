import { useState } from "react";
import WeatherCard from "./WeatherCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cards, setCards] = useState([
    { id: generateCardId(), city: "London", units: "metric" },
    { id: generateCardId(), city: "Washington", units: "imperial" },
    { id: generateCardId(), city: "Berlin", units: "metric" },
  ]);

  function addCard() {
    const newCard = { id: generateCardId(), city: "London", units: "metric" };
    setCards([...cards, newCard]);
  }

  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  function generateCardId() {
    return Date.now() + Math.floor(Math.random() * 1000);
  }

  return (
    <>
      <div className="container">
        {cards.map((card) => (
          <WeatherCard
            key={card.id}
            initialCity={card.city}
            initialUnits={card.units}
            removeCard={() => removeCard(card.id)}
          />
        ))}
        <div className="add-card-button-container">
          <button onClick={addCard} className="btn-add-card">
            +
          </button>
        </div>
      </div>
      <ToastContainer
        autoClose={2500}
        theme="colored"
        pauseOnHover
        position="top-center"
      />
    </>
  );
}

export default App;
