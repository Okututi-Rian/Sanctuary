export type Leader = {
  name: string;
  role: string;
  bio?: string[];
};

export const leaders: Leader[] = [
  {
    name: "Pastor Silas Okututi",
    role: "Lead Pastor",
    bio: [
      "Pastor Silas Okututi shepherds Sanctuary Of Grace with a heart for prayer, worship and discipleship.",
      "He is committed to raising a Christ centered family that knows God and serves the community.",
    ],
  },
];

export const associatePastorsNote = "Our Associate Pastors serve alongside Pastor Silas in shepherding the church.";
