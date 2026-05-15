/**
 * 1-stdin.js
 * A script that interacts with the user via process.stdin
 */

// Display the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data being piped into or typed into stdin
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

// Listen for the 'end' event (e.g., when a pipe closes or EOF is reached)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
