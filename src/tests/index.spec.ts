import { assert } from "chai";
import { nhcarrigan, text } from "../index";
import { stdout } from "test-console";

const expectedTextProperties = [
  "about",
  "packageIntro",
  "websiteIntro",
  "websiteUrl",
  "githubIntro",
  "githubUrl",
  "beccaIntro",
  "beccaWebsiteIntro",
  "beccaWebsiteUrl",
  "beccaDiscordIntro",
  "beccaDiscordInviteUrl",
  "beccaDiscordDocsUrl",
];

suite("Text information object", () => {
  test("should have correct number of properties", () => {
    assert.equal(Object.keys(text).length, expectedTextProperties.length);
  });

  test("should have expected properties", () => {
    Object.keys(text).forEach((prop) => {
      assert.include(
        expectedTextProperties,
        prop,
        `text object has unexpected ${prop} property.`
      );
    });
  });

  test("should have correct about me", () => {
    assert.equal(
      text.about,
      "Hello! My name is Naomi Carrigan. I am a TypeScript developer with an obsession for chat bots and CLI tools."
    );
  });

  test("should have correct package intro", () => {
    assert.equal(
      text.packageIntro,
      "This is my npm package! Sorry to say, this package does not actually DO anything. It is just here for fun. However..."
    );
  });

  test("should have correct website intro", () => {
    assert.equal(
      text.websiteIntro,
      "I have written plenty of projects that ARE functional. If you would like to check out my work, please visit my website at:"
    );
  });

  test("should have correct website URL", () => {
    assert.equal(text.websiteUrl, "https://www.nhcarrigan.com");
  });

  test("should have correct github intro", () => {
    assert.equal(
      text.githubIntro,
      "You can also view all of my projects, including source code and links to live instances, on my GitHub:"
    );
  });

  test("should have correct githubUrl", () => {
    assert.equal(text.githubUrl, "https://github.com/nhcarrigan");
  });

  test("should have correct Becca intro", () => {
    assert.equal(
      text.beccaIntro,
      "I also have quite a few projects that are branded under Becca Lyria, my old Dungeons and Dragons character."
    );
  });

  test("should have correct Becca website intro", () => {
    assert.equal(
      text.beccaWebsiteIntro,
      "You can read more about Becca at her website:"
    );
  });

  test("should have correct Becca website URL", () => {
    assert.equal(text.beccaWebsiteUrl, "https://www.beccalyria.com");
  });

  test("should have correct Becca Discord intro", () => {
    assert.equal(
      text.beccaDiscordIntro,
      "Also, check out the Becca Lyria Discord bot!"
    );
  });

  test("should have correct Becca Discord Invite URL", () => {
    assert.equal(
      text.beccaDiscordInviteUrl,
      "Invite the bot to your server: http://invite.beccalyria.com"
    );
  });

  test("should have correct Becca Discord Docs URL", () => {
    assert.equal(
      text.beccaDiscordDocsUrl,
      "View the bot documentation: https://www.beccalyria.com/discord-documentation"
    );
  });
});

suite("Console", () => {
  const output = stdout.inspectSync(nhcarrigan);

  expectedTextProperties.forEach((prop) => {
    test(`should display value for ${prop}`, () => {
      assert.isAtLeast(
        output.findIndex((string) => string.includes(text[prop])),
        0
      );
    });
  });
});
