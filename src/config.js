/**
 * Configs.
 */

const currentStage = 1;
let originURL = "";

const rootURL = (stage = currentStage) => {
  //add url for test environments 
  switch (stage) {
    case 1:
      originURL = "https://60e84194673e350017c21844.mockapi.io"; 
      break;
    default:
      break;
  }
  return `${originURL}/api`;
};

export { originURL, rootURL, currentStage   };
