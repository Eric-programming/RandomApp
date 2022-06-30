import { readFile } from "fs";
import readFileFunction from "./ReadFile";

interface DataPoint {
  time: number; // in seconds
  sentence: string;
}

function convertVideoFile(mp4: any) {
  readFileFunction(mp4);
}

convertVideoFile("./Desktop 2022.06.25 - 10.25.04.02.mp4");
