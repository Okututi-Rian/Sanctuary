// How to edit history.ts:
// Add new entries to the history array. Each entry needs year, title, text, and image.
// Mark placeholders with a comment like "// placeholder" when needed.

export type HistoryEntry = {
  year: string;
  title: string;
  text: string;
  image: string;
};

export const history: HistoryEntry[] = [
  {
    year: "2015",
    title: "A Tent on Kangundo Road",
    text: "Started in a tent in Saika with a handful of members.",
    image: "/images/history-tent.jpg",
  },
  {
    year: "2016",
    title: "St. Matthews High School",
    text: "Moved to Obama Estate and stayed a long season.",
    image: "/images/history-stmatthews.jpg",
  },
  {
    year: "2018",
    title: "Carestan International School",
    text: "Our current home in Obama Estate.",
    image: "/images/history-carestan.jpg",
  },
  {
    year: "2021",
    title: "Growing in Faith",
    text: "A season of growth in services, youth and Sunday school. // placeholder",
    image: "/images/history-plot.jpg",
  },
  {
    year: "2023",
    title: "Reaching Our Community",
    text: "Expanding outreach efforts to bless families in our community. // placeholder",
    image: "/images/history-plot.jpg",
  },
  {
    year: "2025",
    title: "Building Our Own Home",
    text: "Currently contributing toward buying a plot and building our own place of worship.",
    image: "/images/history-plot.jpg",
  },
];
