(async () => {
  const raw = await fetch(`https://www.naomi.lgbt/assets/data/verify.txt`);
  const text = await raw.text();

  console.log(text);
  console.log("Verify at https://naomi.lgbt");
})();
