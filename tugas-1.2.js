var n = 9;

for (x = 0; x < n; x++) {
  for (y = 0; y < n; y++) {
    if (n - y * 1 - 1 == x) {
      document.write(y * 2);
    } else {
      document.write(" - ");
    }
  }
  document.write("<br>");
}
