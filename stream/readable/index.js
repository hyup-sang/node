import { RandomStream } from "./readable-stream.js";

const randomStream = new RandomStream();
// randomStream
//   .on("data", (chunk) => {
//     console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}`);
//   })
//   .on("end", () => {
//     console.log(`Produced ${randomStream.emittedBytes} bytes of random data`);
//   });

for await (const chunk of randomStream) {
  console.log(`Chunk received (${chunk.length} bytes): ${chunk.toString()}`);
}
console.log(`Produced ${randomStream.emittedBytes} bytes of random data`);
