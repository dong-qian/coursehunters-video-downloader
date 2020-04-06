const fs = window.require('fs');
const readline = window.require('readline');
const request = window.require('request');
const progress = window.require('request-progress');
const _ = require('lodash');

let req;
let isStopped = false;

const makeDownloadDir = (pathname) => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(pathname)) {
      fs.mkdir(pathname, () => {
        fs.writeFile(`${pathname}/videoList.txt`, '', () => {
          resolve();
        });
      });
    } else if (!fs.existsSync(`${pathname}/videoList.txt`)) {
      fs.writeFile(`${pathname}/videoList.txt`, '', () => {
        resolve();
      });
    } else {
      resolve();
    }
  });
};

const getExistVideoList = (pathname) => {
  return new Promise((resolve, reject) => {
    const existVideoList = [];
    const rl = readline.createInterface({
      input: fs.createReadStream(`${pathname}/videoList.txt`),
    });

    rl.on('line', (line) => {
      var arr = line.split('\n');
      existVideoList.push(arr[0]);
    })
      .on('close', () => {
        resolve(existVideoList);
      })
      .on('error', (e) => {
        console.log('error', e);
        reject();
      });
  });
};

const downloadOne = (
  lesson,
  pathname,
  updateDownloadStatus,
  setFinishDownloadOne
) => {
  return new Promise((resolve, reject) => {
    req = request(encodeURI(lesson.url));
    progress(req, { throttle: 2000, delay: 1000 })
      .on('progress', (state) => {
        updateDownloadStatus(state, lesson.name);
      })
      .on('error', (err) => {
        console.log(`${err}`.red);
        reject();
      })
      .on('end', () => {
        if (isStopped) return resolve();
        setFinishDownloadOne(lesson.name);
        resolve();
        fs.appendFile(`${pathname}/videoList.txt`, `${lesson.name}\n`, () => {
          resolve();
        });
      })
      .pipe(fs.createWriteStream(`${pathname}/${lesson.name}.mp4`));
  });
};

export const downloadVideos = async (
  courseName,
  downloadPath,
  lessons,
  updateDownloadStatus,
  setFinishDownloadOne,
  setFinishAll
) => {
  isStopped = false;
  const pathname = `${downloadPath}/${courseName}`;
  // make download folder
  await makeDownloadDir(pathname);

  // get exist videos
  const existVideoList = await getExistVideoList(pathname);
  // start download video one by one
  // eslint-disable-next-line
  for (const [i, lesson] of lessons.entries()) {
    if (isStopped) return;
    if (!_.includes(existVideoList, lesson.name)) {
      await downloadOne(
        lesson,
        pathname,
        updateDownloadStatus,
        setFinishDownloadOne
      );
    } else {
      setFinishDownloadOne(lesson.name);
    }
  }
  setFinishAll();
};

export const stopDownload = () => {
  if (req !== undefined) {
    req.abort();
    isStopped = true;
  }
};
