import { join } from "path";
import { ToFileStream } from "./to-file-stream.js";
const tfs = new ToFileStream();

tfs._wirte({
  path: join("files", "file1.txt"),
  content: "hello",
});

tfs._wirte({
  path: join("files", "file2.txt"),
  content: "node.js",
});

tfs._wirte({
  path: join("files", "file3.txt"),
  content: "streams",
});

tfs.end(() => console.log("all files created"));
