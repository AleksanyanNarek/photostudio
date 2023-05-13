//Import Images
import nature1 from "./img/nature1.jpeg";
import car1 from "./img/car1.jpeg";
import goodtimes from "./img/goodtimes-small.png";

import nature2 from "./img/nature2.jpeg";
import car2 from "./img/car2.png";
import goodtimes2 from "./img/good-times2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Nature",
      mainImg: nature1,
      secondaryImg: nature2,
      url: "/work/nature",
      awards: [
        {
          title: "Masterpiece",
          description:
            "“Our specialists have achieved a wonderful result, which you can see for yourself.”",
        },
        {
          title: "Play of light and right angle",
          description:
            "“The picture conveys all the elegance and beauty of the scene.”",
        },
      ],
    },
    {
      title: "Automobiles",
      mainImg: car1,
      secondaryImg: car2,
      url: "/work/automobiles",
      awards: [
        {
          title: "Right choice of moment",
          description:
            "“The moment conveys all the speed and beauty of a sports car.”",
        },
        {
          title: "Realism",
          description:
            "“It seems that there is not a picture in front of you, but a car.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      secondaryImg: goodtimes2,
      url: "/work/good-times",
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Capture your happy moments with beloved ones with us.”",
        },
        {
          title: "The True Value",
          description:
            "“Trust the moment and be yourself.”",
        }
      ],
    },
  ];
};
