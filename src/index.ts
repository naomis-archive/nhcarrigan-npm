import chalk from "chalk";

const nhcarrigan = () => {
  console.info(
    chalk.magenta(
      "Hello! My name is Nicholas Carrigan, and this is my npm package!\nSorry to say, this package does not actually DO anything. It is just here for fun. However...\nI have written plenty of projects that ARE functional. If you would like to check out my work, please visit my website at: \n"
    ) +
      chalk.black.bgMagenta("https://www.nhcarrigan.com") +
      chalk.magenta("\nOr view my GitHub:\n") +
      chalk.black.bgMagenta("https://github.com/nhcarrigan") +
      chalk.magenta("\nThanks for checking this package out! Have a great day!")
  );
};

nhcarrigan();
