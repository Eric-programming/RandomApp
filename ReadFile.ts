import fs from "fs";
import { parse, resync, stringify } from "subtitle";
export default function readFileFunction(name: any) {
  fs.createReadStream(`./${name}.mp4`)
    .pipe(parse())
    .pipe(resync(-100))
    .pipe(stringify({ format: "SRT" }))
    .pipe(fs.createWriteStream("./my-subtitles.srt"));
}
