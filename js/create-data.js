import { getRandomInt } from "./random-int.js";

const getRandomId = () => {
  return getRandomInt(1, 25);
};

const messages = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра.",
  "В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают.",
  "Как можно было поймать такой неудачный момент?!",
];

const names = [
  "TouchMyDog",
  "AntiDozor",
  "Cat-top-234",
  "Alabama-Higga",
  "SuspectedBad",
  "Megatron",
  "Liazrd",
  "Anti-hero",
];

const createComment = () => {
  const commentArrayObj = {};

  commentArrayObj.id = getRandomId();
  commentArrayObj.avatar = `img/avatar-` + `${getRandomInt(1, 25)}` + `.svg`;
  commentArrayObj.message = messages[getRandomInt(0, messages.length - 1)];
  commentArrayObj.name = names[getRandomInt(0, names.length - 1)];

  return commentArrayObj;
};

const createNOfCommnet = Array.from({ length: 25 }, createComment);

const createNewObj = () => {
  const newObj = {
    id: getRandomId(),
    url: `photos/` + `${getRandomInt(1, 25)}` + `.jpg`,
    description: "Моя первая фотка в жизни!",
    likes: +`${getRandomInt(15, 200)}`,
    comments: createNOfCommnet,
  };
  return newObj;
};

export { createNewObj };
