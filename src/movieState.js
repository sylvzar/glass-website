//Import Images
import massage from "./img/massage.jpg";
import bath from "./img/bath.jpg";
import stones from "./img/stones.jpg"

export const MovieState = () => {
  return [
    {
      title: "Massage",
      mainImg: massage,
      secondaryImg: massage,
      url: "/work/massage",
      awards: [
        {
          title: "Traditional massage",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Thai massage",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Oil massage",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Relax",
      mainImg: bath,
      url: "/work/bath",
      secondaryImg: bath,
      awards: [
        {
          title: "Sauna",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Jacuzzi",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Aqua massage",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Treatments",
      mainImg: stones,
      url: "/work/stones",
      secondaryImg: stones,
      awards: [
        {
          title: "Hot stone treatment",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Full body scrub",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Face mask and scrub",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};
