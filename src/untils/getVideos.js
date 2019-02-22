import validator from "validator";
import axios from "axios";
import cheerio from "cheerio";

export default async courseUrl => {
  if (validator.isURL(courseUrl)) {
    try {
      const data = await getCourseNamesAndURLS(courseUrl);
      return data;
    } catch (err) {
      throw err;
    }
  } else {
    throw new Error("Course url is not valid");
  }
};

const getCourseNamesAndURLS = async courseUrl => {
  try {
    const data = await axios.get(courseUrl);
    let lessonNames = [];
    let $ = cheerio.load(data.data);

    let html = $("#lessons-list");
    let dataArray = html
      .children(".lessons-list__li")
      .children()
      .toArray();

    const filterLessonUrls = dataArray.filter(
      el => el.name === "link" && el.attribs.itemprop === "contentUrl"
    );
    const filterNames = dataArray.filter(el => el.name === "span");

    filterNames.forEach(el => {
      if (el.name === "span") {
        const videoName = el.children[0].data.replace(/[\/:*?"<>|]/g, "");
        const name = videoName.replace(new RegExp("Урок", "g"), "Lesson");
        lessonNames.push(name);
      }
    });

    /* Here chapter urls are fetched from the <span> tags */
    const lessonUrls = filterLessonUrls.map(el => el.attribs.href);

    if (lessonUrls.length === 0) {
      throw new Error(
        "Course url is not valid or not videos can be downloaded"
      );
    }

    return { lessonNames, lessonUrls };
  } catch (err) {
    throw err;
  }
};
