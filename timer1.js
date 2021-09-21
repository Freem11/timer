var input = process.argv.slice(2);

if (input.length > 0) {
  input.sort(function (a, b) {
    return a - b;
  });

  let delay = null;
  for (i = 0; i < input.length; i++) {
    if (input[i] >= 0) {
      delay = input[i] * 1000;

      if (isNaN(input[i])) {
      } else {
        setTimeout(() => {
          process.stdout.write("\x07");
        }, delay);
      }
    }
  }
}
