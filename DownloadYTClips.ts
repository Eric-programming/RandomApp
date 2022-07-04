interface ClipInfo {
  url: string; // YT Url
  start: string; // Start time stamp (ex. 1:01)
  end: string; // End time stamp (ex. 1:03)
}

/**
 * Takes a list of video clips information + file path and download the video clips in the targeted file path.
 */
function downloadYTClips(clips: ClipInfo[], filePath: string) {}
