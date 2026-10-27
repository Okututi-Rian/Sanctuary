export type Ministry = {
  slug: string;
  name: string;
  description: string;
  leader: string;
  meetingTime: string;
  image: string;
};

export const ministries: Ministry[] = [
  {
    slug: "grace-melodies",
    name: "Grace Melodies (Praise and Worship Team)",
    description: "Leading the congregation in heartfelt worship through songs of praise and adoration.",
    leader: "Boniface Omuyonga",
    meetingTime: "As scheduled for worship service preparation",
    image: "/images/ministry-grace-melodies.jpg",
  },
  {
    slug: "youth-team",
    name: "Youth Team",
    description: "A vibrant family of young people growing in faith, fellowship and service.",
    leader: "Devel Wamanya",
    meetingTime: "Sunday 2:00 pm, Youth Service Saturday 5:00 pm",
    image: "/images/ministry-youth.jpg",
  },
  {
    slug: "sunday-school",
    name: "Sunday School",
    description: "Nurturing children in the Word of God with love, stories and biblical truths.",
    leader: "Melvin Buyuka",
    meetingTime: "Sunday 10:00 am, for the children",
    image: "/images/ministry-sunday-school.jpg",
  },
];
