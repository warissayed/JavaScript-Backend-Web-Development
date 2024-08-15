import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
interface Joke {
  id: number;
  joke: string;
}

function App() {
  const [jokes, setJokes] = useState<Joke[]>([]);
  useEffect(() => {
    axios
      .get<Joke[]>("/api/jokes")
      .then((res) => setJokes(res.data))
      .catch((err) => console.log(err));
  });

  return (
    <>
      <h1>Waris sayed</h1>
      <p>Jokes:{jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default App;
