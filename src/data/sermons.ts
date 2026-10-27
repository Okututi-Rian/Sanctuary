export type Sermon = {
  id: string;
  title: string;
  date: string;
  speaker: string;
  youtubeUrl: string;
  thumbnail: string;
};

export const sermons: Sermon[] = [
  {
    id: "sermon-1",
    title: "Taste and See",
    date: "2025-10-05",
    speaker: "Pastor Silas Okututi",
    youtubeUrl: "https://www.youtube.com/",
    thumbnail: "/images/sermon-1.jpg",
  },
  {
    id: "sermon-2",
    title: "God is Faithful",
    date: "2025-10-12",
    speaker: "Pastor Silas Okututi",
    youtubeUrl: "https://www.youtube.com/",
    thumbnail: "/images/sermon-2.jpg",
  },
  {
    id: "sermon-3",
    title: "Walking by Faith",
    date: "2025-10-19",
    speaker: "Pastor Silas Okututi",
    youtubeUrl: "https://www.youtube.com/",
    thumbnail: "/images/sermon-3.jpg",
  },
];
