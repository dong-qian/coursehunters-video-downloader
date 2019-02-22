const fs = window.require("fs");
const readline = window.require("readline");
const request = window.require("request");
const progress = window.require("request-progress");

const makeDownloadDir = pathname => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(pathname)) {
      fs.mkdir(pathname, () => {
        fs.writeFile(`${pathname}/videoList.txt`, "", () => {
          resolve();
        });
      });
    } else {
      resolve();
    }
  });
};

const getExsitVideoList = pathname => {
  return new Promise((resolve, reject) => {
    const existVideoList = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(`${pathname}/videoList.txt`)
    });

    rl.on("line", line => {
      var arr = line.split("\n");
      existVideoList.push(arr[0]);
    })
      .on("close", () => {
        resolve(existVideoList);
      })
      .on("error", e => {
        reject();
        console.log("error", e);
      });
  });
};

const downloadOne = (videoUrl, videoName, pathname, setDownloadState) => {
  return new Promise((resolve, reject) => {
    progress(request(encodeURI(videoUrl)), { throttle: 2000, delay: 1000 })
      .on("progress", state => {
        console.log(state);
        setDownloadState(state);
      })
      .on("error", err => {
        console.log(`${err}`.red);
      })
      .on("end", function() {
        console.log("finish one");
        resolve();
        // fs.appendFile(`${pathname}/videoList.txt`, `${videoName}\n`, () => {
        //   resolve();
        // });
      })
      .pipe(fs.createWriteStream(`${pathname}/${videoName}.mp4`));
  });
};

const downloadVideos = async (
  downloadPath,
  url,
  lessonNames,
  lessonUrls,
  setDownloadState,
  setCurrentDownloadingVideo
) => {
  let courseName = url.split("/");
  courseName = courseName[courseName.length - 1];
  const pathname = `${downloadPath}/${courseName}`;

  // make download folder
  await makeDownloadDir(pathname);
  console.log("here");

  // get exist videos
  const existVideoList = await getExsitVideoList(pathname);
  console.log("existVideoList", existVideoList);

  // start download video one by one
  for (const [i, value] of lessonNames.entries()) {
    console.log(lessonNames[i]);
    setCurrentDownloadingVideo(value);
    if (existVideoList.indexOf(value) === -1) {
      await downloadOne(
        lessonUrls[i],
        lessonNames[i],
        pathname,
        setDownloadState
      );
    } else {
      console.log("video already exist");
    }
  }
};

export default downloadVideos;
