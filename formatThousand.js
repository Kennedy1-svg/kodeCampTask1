let b;
function formatThousand(b) {
  if (!isNaN(b)) {
    let c = b.toLocaleString();
    console.log(c);
  } else {
    console.log("argument must be a number");
  }
}

formatThousand(10000000000);
