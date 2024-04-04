import lvl2image from  "../../assets/level_images/level_2.png";
import Clvl2image from  "../../assets/power_up_level_images/level_2.png";

const level2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 4, 4, 3, 3, 1, 3, 3, 3, 3, 3, 1, 1, 1],
  [1, 4, 4, 3, 3, 1, 3, 2, 3, 3, 2, 3, 3, 1],
  [1, 4, 4, 3, 3, 1, 2, 1, 1, 1, 1, 3, 3, 1],
  [1, 4, 4, 3, 3, 3, 3, 5, 3, 1, 1, 3, 3, 1],
  [1, 4, 4, 3, 3, 1, 3, 1, 3, 3, 2, 3, 1, 1],
  [1, 1, 1, 1, 1, 1, 3, 1, 1, 2, 3, 2, 3, 1],
  [0, 0, 1, 3, 2, 3, 3, 2, 3, 2, 3, 2, 3, 1],
  [0, 0, 1, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 1],
  [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const customLevel2 =[[3,1,1,1,1,1,1],[3,1,3,3,3,4,1],[1,1,10,3,3,4,1],[1,20,2,1,3,1,1],[1,1,2,1,3,1,3],[3,1,5,3,3,1,3],[3,1,1,1,1,1,3]]
 export const cl2 = { level: 2 , board: customLevel2, image: Clvl2image}

export const l2 = { level: 2, board: level2, image: lvl2image}