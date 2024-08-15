import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      joke: "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      joke: "Why did the tomato turn red? Because it saw the salad dressing!",
    },
    {
      id: 3,
      joke: "What do you call a fake noodle? An Impasta!",
    },
    {
      id: 4,
      joke: "Why did the bicycle fall over? Because it was two-tired!",
    },
    {
      id: 5,
      joke: "What do you call a fake noodle? An Impasta!",
    },
  ];
  res.send(jokes);
});
const Port = process.env.PORT || 3000;

app.listen(Port, () => {
  console.log(`Server at http://localhost:${Port}`);
});
