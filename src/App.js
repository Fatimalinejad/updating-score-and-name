import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    score: 10,
    person: {
      firstName: "Fatemeh",
      lastName: "Alinejad"
    }
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1
    });
  }
  function handleFirstName(e) {
    setPlayer({
      ...player,
      person: {
        ...player.person,
        firstName: e.target.value
      }
    });
  }
  function handleLastName(e) {
    setPlayer({
      ...player,
      person: {
        ...player.person,
        lastName: e.target.value
      }
    });
  }

  return (
    <>
      <label>
        Score: <b>{player.score}</b>{" "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First Name:{" "}
        <input value={player.person.firstName} onChange={handleFirstName} />
      </label>
      <label>
        Last Name:{" "}
        <input value={player.person.lastName} onChange={handleLastName} />
      </label>
      <p>
        {" "}
        {player.person.firstName} {player.person.lastName} has{" "}
        <b>{player.score}</b>
      </p>
    </>
  );
}
