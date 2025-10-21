const preHeatOven = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const preHeatOven = true;

      if (preHeatOven) {
        resolve("Preheat oven to 180 degrees");
      } else {
        reject("Failed Task");
      }
    }, 1800);
  });
};

const addSugarAndChocoChips = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addChoco = true;

      if (addChoco) {
        resolve(
          "Place butter and chocolate chips, stir until melted and smooth"
        );
      } else {
        reject("Failed Task");
      }
    }, 1000);
  });
};

const addFlourCocoaAndSalt = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const addSaltFlour = false;

      if (addSaltFlour) {
        resolve("Add flour, coco and salt");
      } else {
        reject("Failed Task! No flour :/");
      }
    }, 3000);
  });
};

const bakeMixture = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const bakeMixture = true;

      if (bakeMixture) {
        resolve("Bake for 24 minutes for really gooey center");
      } else {
        reject("Failed Task");
      }
    }, 2000);
  });
};

const bakeChocolateBrownies = async () => {
  try {
    const taskOne = await preHeatOven();
    console.log(taskOne);
    const taskTwo = await addSugarAndChocoChips();
    console.log(taskTwo);
    const taskThree = await addFlourCocoaAndSalt();
    console.log(taskThree);
    const taskFour = await bakeMixture();
    console.log(taskFour);

    console.log("Enjoy your perfect Chocolate Brownies!");
  } catch (err) {
    console.log(err);
  }
};

bakeChocolateBrownies();
