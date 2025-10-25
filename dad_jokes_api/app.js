const loadJoke = async () => {
  try {
    const jokeFetch = await fetch("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    });

    const jokeData = await jokeFetch.json();
    console.log(jokeData);
    document.getElementById("loadingJoke").innerHTML = jokeData.joke;
  } catch (err) {
    console.log(err);
  }
};

document.getElementById("loadJokeBtn").addEventListener("click", loadJoke);
