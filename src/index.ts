import { logHandler } from "./utils/logHandler";

(async () => {
  const raw = await fetch(`https://www.naomi.lgbt/assets/data/verify.txt`);
  const text = await raw.text();

  logHandler.log("info", text);
  logHandler.log("info", "Verify at https://naomi.lgbt");
})();
