async function main() {
  if (process.argv.length < 3) {
    console.log("no url provided");
    process.exit(1);
  }

  if (process.argv.length > 3) {
    console.log("too many urls provided");
    process.exit(1);
  }

  const url = process.argv[2];
  console.log("crawling ->", url);
}

main();
