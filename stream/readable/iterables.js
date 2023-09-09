import { Readable } from 'stream';

const mountains = [
  { name: 'everaest', height: 8848 },
  { name: 'k2', height: 8611 },
  { name: 'makalu', height: 8481 },
];

const mountainsStream = Readable.from(mountains);
mountainsStream.on('data', (mountain) => {
  console.log(`${mountain.name.padStart(14)}\t${mountain.height}`);
})