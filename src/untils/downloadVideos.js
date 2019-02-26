const fs = window.require('fs');
const readline = window.require('readline');
const request = window.require('request');
const progress = window.require('request-progress');
const _ = require('lodash');

let r;

const makeDownloadDir = pathname => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(pathname)) {
      fs.mkdir(pathname, () => {
        fs.writeFile(`${pathname}/videoList.txt`, '', () => {
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

    rl.on('line', line => {
      var arr = line.split('\n');
      existVideoList.push(arr[0]);
    })
      .on('close', () => {
        resolve(existVideoList);
      })
      .on('error', e => {
        console.log('error', e);
        reject();
      });
  });
};

const downloadOne = (
  lesson,
  pathname,
  updateDownloadStatuss,
  setFinishDownloadOne
) => {
  return new Promise((resolve, reject) => {
    r = request(encodeURI(lesson.url));
    progress(r, { throttle: 2000, delay: 1000 })
      .on('progress', state => {
        updateDownloadStatuss(state, lesson.name);
      })
      .on('error', err => {
        console.log(`${err}`.red);
        reject();
      })
      .on('end', () => {
        setFinishDownloadOne(lesson.name);
        resolve();
        fs.appendFile(`${pathname}/videoList.txt`, `${lesson.name}\n`, () => {
          resolve();
        });
      })
      .pipe(fs.createWriteStream(`${pathname}/${lesson.name}.mp4`));
  });
};

const downloadVideos = async (
  downloadPath,
  url,
  lessons,
  updateDownloadStatuss,
  setFinishDownloadOne,
  setFinishAll
) => {
  let courseName = _.last(url.split('/'));
  const pathname = `${downloadPath}/${courseName}`;

  // make download folder
  await makeDownloadDir(pathname);

  // get exist videos
  const existVideoList = await getExsitVideoList(pathname);

  // start download video one by one
  // eslint-disable-next-line
  for (const [i, lesson] of lessons.entries()) {
    if (!_.includes(existVideoList, lesson.name)) {
      await downloadOne(
        lesson,
        pathname,
        updateDownloadStatuss,
        setFinishDownloadOne
      );
    } else {
      setFinishDownloadOne(lesson.name);
    }
  }

  setFinishAll();
};

export const stopDownload = () => {
  console.log(r);
};

export default downloadVideos;
