// fetch("https://dummyjson.com/products/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("https://dummyjson.com/products/add", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "Hunger Games: Hummingbird",
//     description: "Last book in a award winning series",
//     price: "10",
//     rating: "9/10",
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetch("https://dummyjson.com/products/")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

const getAllProducts = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const json = await response.json();
    console.log(json);
  } catch (err) {
    console.log(err);
  }
};

getAllProducts();
