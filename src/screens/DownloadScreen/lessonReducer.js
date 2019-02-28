import _ from "lodash";

export default videos => (state, action) => {
  switch (action.type) {
    case "UPDATE_STATUS":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          status: action.payload.status
        }
      };
    case "FINISH_ONE":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          isFinished: true,
          progress: "success"
        }
      };
    case "TOGGLE_ONE_CHECK":
      return {
        ...state,
        [action.payload.name]: {
          ...state[action.payload.name],
          checked: !state[action.payload.name].checked
        }
      };
    case "TOGGLE_ALL_CHECK":
      let newLessons = {};
      _.forEach(
        state,
        value =>
          (newLessons[value.name] = {
            ...value,
            checked: action.payload.checked
          })
      );
      return newLessons;
    case "FILTER_LESSONS":
      const newSelectedLessons = {};
      _.forEach(videos, l => {
        const videoName = l.name.toLowerCase();
        const searchVideoName = action.payload.name.toLowerCase();
        if (_.includes(videoName, searchVideoName)) {
          newSelectedLessons[l.name] = l;
        }
      });
      return newSelectedLessons;
    case "RESET":
      return action.payload.videos;
    default:
      throw new Error();
  }
};
