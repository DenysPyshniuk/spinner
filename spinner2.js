process.stdout.write("hello from spinner1.js... \rheyyy\n");

const text = ('|/-\\|/-\\|');
let time = 100;

for (const char of text) {
  setTimeout(() => {
    process.stdout.write(`${char}\r`); //=> will print each character
  }, time);
  time += 200; // => with delay of 'time' between each character
}