import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: "Person",
    lastName: "1",
    email: "a1@gmail.com",
    password: "$10$dsasdgsagasda//",
    picturePath: "p1.jpeg",
    friends: [],
    location: "Banglore, India",
    occupation: "Software Engineer",
    viewedProfile: 14561,
    // impressions: 888822,
    createdAt: 1115211422,
    updatedAt: 1115211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: "Person",
    lastName: "2",
    email: "a2@gmail.com",
    password: "Xf4OAIe/X/AK9skyWUy",
    picturePath: "p3.jpeg",
    friends: [],
    location: "Gurgaon, India",
    occupation: "Cyber Security Engineer",
    viewedProfile: 12351,
    // impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: "Person",
    lastName: "3",
    email: "a3@gmail.com",
    password: "d3255bfef95601890afd80709",
    picturePath: "p4.jpeg",
    friends: [],
    location: "Mumbai, India",
    occupation: "Actor",
    viewedProfile: 45468,
    // impressions: 19986,
    createdAt: 1288090662,
    updatedAt: 1288090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: "Person",
    lastName: "4",
    email: "a4@gmail.com",
    password: "Q8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p6.jpeg",
    friends: [],
    location: "Patna, India",
    occupation: "Professor",
    viewedProfile: 41024,
    // impressions: 55316,
    createdAt: 1219214568,
    updatedAt: 1219214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: "Person",
    lastName: "5",
    email: "a5@gmail.com",
    password: "9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p5.jpeg",
    friends: [],
    location: "Hyderabad, India",
    occupation: "Data Scientist",
    viewedProfile: 40212,
    // impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: "Person",
    lastName: "6",
    email: "a6@gmail.com",
    password: "/G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy",
    picturePath: "p7.jpeg",
    friends: [],
    location: "Delhi, India",
    occupation: "Journalist",
    viewedProfile: 976,
    // impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: "Person",
    lastName: "7",
    email: "a7@gmail.com",
    password: "$2b$Ie/X/AK9skyWUy",
    picturePath: "p8.jpeg",
    friends: [],
    location: "Delhi, India",
    occupation: "Doctor",
    viewedProfile: 1510,
    // impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: "Person ",
    lastName: "8",
    email: "a8@gmail.com",
    password: "$2bOAIe/X/AK9skyWUy",
    picturePath: "p9.jpeg",
    friends: [],
    location: "Gujarat, India",
    occupation: "BusinessMan",
    viewedProfile: 19420,
    // impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];

export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: "Person",
    lastName: "2",
    location: "Gurgaon, India",
    description: "Long random description",
    picturePath: "post1.jpg",
    userPicturePath: "p3.jpeg",
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      "random comment",
      "another random comment",
      "yet another random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: "Person",
    lastName: "4",
    location: "Patna, India",
    description:
      "Another really long random description.",
    picturePath: "post2.jpg",
    userPicturePath: "p6.jpeg",
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      "one more random comment",
      "and another random comment",
      "no more random comments",
      "I lied, one more random comment",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: "Person",
    lastName: "5",
    location: "Hyderabad, India",
    description:
      "This is the last really long random description.",
    picturePath: "post4.jpg",
    userPicturePath: "p5.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      "one more random comment",
      "I lied, one more random comment",
      "I lied again, one more random comment",
      "Why am I doing this?"
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: "Person",
    lastName: "6",
    location: "Delhi, India",
    description:
      "This is the last really long random description. Man I'm bored. I'm going to keep typing until I run out of things to say.",
    picturePath: "post6.jpg",
    userPicturePath: "p7.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "I'm bored",
      "I'm still bored",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: "Person",
    lastName: "7",
    location: "Delhi, India",
    description:
      "Just a short description. I'm tired of typing. I'm going to play games now.",
    picturePath: "post5.jpg",
    userPicturePath: "p8.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      "I lied again, one more random comment",
      "Why am I doing this?",
      "Man I'm bored",
      "What should I do?",
      "I'm going to play video games",
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: "Person",
    lastName: "8",
    location: "Gujarat, India",
    description:
      "For the last time, I'm going to play video games now. I'm tired of typing. I'm going to play video games now.",
    picturePath: "post7.jpg",
    userPicturePath: "p9.jpeg",
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),

    comments: [
      "Can I play video games now?",
      "No let's actually study",
      "Never mind, I'm going to play video games",
      "Stop it."
    ],
  },
];