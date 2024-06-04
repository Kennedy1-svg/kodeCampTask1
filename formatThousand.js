let b;
function costOperator(b) {
  if (!isNaN(b)) {
    let c = b.toLocaleString();
    console.log(c);
  } else {
    console.log("argument must be a number");
  }
}

costOperator(10000000000);
