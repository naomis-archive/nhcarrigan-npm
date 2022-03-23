import chalk from "chalk";

export const text: { [key: string]: string } = {
  about:
    "Hello! My name is Naomi Carrigan. I am a TypeScript developer with an obsession for chat bots and CLI tools.",
  packageIntro:
    "This is my npm package! Sorry to say, this package does not actually DO anything. It is just here for fun. However...",
  websiteIntro:
    "I have written plenty of projects that ARE functional. If you would like to check out my work, please visit my website at:",
  websiteUrl: "https://www.nhcarrigan.com",
  githubIntro:
    "You can also view all of my projects, including source code and links to live instances, on my GitHub:",
  githubUrl: "https://github.com/nhcarrigan",
  beccaIntro:
    "I also have quite a few projects that are branded under Becca Lyria, my old Dungeons and Dragons character.",
  beccaWebsiteIntro: "You can read more about Becca at her website:",
  beccaWebsiteUrl: "https://www.beccalyria.com",
  beccaDiscordIntro: "Also, check out the Becca Lyria Discord bot!",
  beccaDiscordInviteUrl:
    "Invite the bot to your server: http://invite.beccalyria.com",
  beccaDiscordDocsUrl:
    "View the bot documentation: https://www.beccalyria.com/discord-documentation",
};

export const nhcarrigan = (): void => {
  console.info(chalk.cyan(text.about));
  console.info(chalk.cyan(text.packageIntro));
  console.info(chalk.green(text.websiteIntro));
  console.info(chalk.green(text.websiteUrl));
  console.info(chalk.yellow(text.githubIntro));
  console.info(chalk.yellow(text.githubUrl));
  console.info(chalk.magenta(text.beccaIntro));
  console.info(chalk.magenta(text.beccaWebsiteIntro));
  console.info(chalk.magenta(text.beccaWebsiteUrl));
  console.info(chalk.magenta(text.beccaDiscordIntro));
  console.info(chalk.magenta(text.beccaDiscordInviteUrl));
  console.info(chalk.magenta(text.beccaDiscordDocsUrl));
};

nhcarrigan();
