process.stdout.write("hello from spinner1.js... \rheyyy\n");

const text = ('|/-\\|/-\\|');
let time = 100;

for (const char of text) {
  setTimeout(() => {
    process.stdout.write(`${char}\r`); //=> will print each character
  }, time);
  time += 200; // => with delay of 'time' between each character
}

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 700);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 900);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 1100);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 1300);

// setTimeout(() => {
//   process.stdout.write("\r\\   ");
// }, 1500);

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 1700);
