export type EventItem = {
  id: string;
  title: string;
  type: "service" | "midweek" | "fundraising" | "other";
  time: string;
  day: string;
  location: string;
  description: string;
  recurring: boolean;
};

export const events: EventItem[] = [
  {
    id: "sunday-first",
    title: "Sunday Service - First Service",
    type: "service",
    day: "Sunday",
    time: "9:00 am to 11:00 am",
    location: "Carestan International School, Obama Estate",
    description: "Worship, prayer and the Word of God.",
    recurring: true,
  },
  {
    id: "sunday-second",
    title: "Sunday Service - Second Service",
    type: "service",
    day: "Sunday",
    time: "11:00 am to 1:00 pm",
    location: "Carestan International School, Obama Estate",
    description: "Worship, prayer and the Word of God.",
    recurring: true,
  },
  {
    id: "sunday-interdenom",
    title: "Interdenominational Service",
    type: "service",
    day: "Sunday",
    time: "3:30 pm to 6:00 pm (prayers and worship)",
    location: "Carestan International School, Obama Estate",
    description: "Prayers and worship together as one body.",
    recurring: true,
  },
  {
    id: "midweek-tue",
    title: "Midweek Service",
    type: "midweek",
    day: "Tuesday",
    time: "5:00 pm",
    location: "Carestan International School, Obama Estate",
    description: "Bible study, prayer and fellowship.",
    recurring: true,
  },
  {
    id: "midweek-thu",
    title: "Midweek Service",
    type: "midweek",
    day: "Thursday",
    time: "5:00 pm",
    location: "Carestan International School, Obama Estate",
    description: "Bible study, prayer and fellowship.",
    recurring: true,
  },
  {
    id: "midweek-sat",
    title: "Midweek Service",
    type: "midweek",
    day: "Saturday",
    time: "5:00 pm",
    location: "Carestan International School, Obama Estate",
    description: "Bible study, prayer and fellowship.",
    recurring: true,
  },
  {
    id: "fundraising-plot",
    title: "Fundraising for the Church Plot",
    type: "fundraising",
    day: "Ongoing",
    time: "As announced",
    location: "Carestan International School, Obama Estate",
    description: "We are contributing toward buying a plot and building our own place of worship. Your prayers and support are greatly appreciated.",
    recurring: true,
  },
];
