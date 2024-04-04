import {
  ELessonType,
  EOperation,
  ILessons,
  IListBadges,
  IQuiz,
} from "../types/utils";

export const lessons: ILessons = [
  {
    title: "Trên, dưới, phải, trái, trước, sau, ở giữa",
    video: "Qtm4ou2MMgw",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Pikachu đang ngồi ở bên nào so với cậu bé?",
        choices: ["Bên trái", "Bên phải", "Bên trên", "Bên dưới"],
        answer: 1,
      },
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Cậu bé đang ngồi ở đâu?",
        choices: [
          "Bên trái Pika",
          "Bên phải Pika",
          "Bên trên Celery",
          "Bên dưới chó",
        ],
        answer: 0,
      },
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Celery(con đang bay) đang như thế nào so với cậu bé",
        choices: ["Bên phải", "Bên dưới", "Bên trên", "Phía sau"],
        answer: 2,
      },
      {
        imageSource: require("../../assets/quiz/poke.png"),
        question: "Con chó đang như thế nào so với cái ghế",
        choices: ["Bên trên", "Bên phải", "Phía trước", "Bên dưới"],
        answer: 1,
      },
    ],
  },
  {
    title: "Hình vuông, hình tròn, hình tam giác, hình chữ nhật",
    video: "lcl8uB2AWM0",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [
      {
        imageSource: require("../../assets/quiz/circle.png"),
        question: "Đây là hình gì?",
        choices: ["Hình vuông", "Hình tam giác", "Hình chữ nhật", "Hình tròn"],
        answer: 3,
      },
      {
        imageSource: require("../../assets/quiz/square.png"),
        question: "Đây là hình gì?",
        choices: ["Hình vuông", "Hình tam giác", "Hình chữ nhật", "Hình tròn"],
        answer: 0,
      },
    ],
  },
  {
    title: "Phép cộng trừ các số từ 0 đến 10",
    video: "MPizQADKkM8",
    type: ELessonType.PICK_NUMBER,
    exams: [
      {
        firstNum: 4,
        secondNum: 5,
        operation: EOperation.AddOperation,
        choices: [2, 3, 9],
        answer: 2,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [6, 4, 9],
        answer: 0,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [1, 5, 9],
        answer: 1,
      },
      {
        firstNum: 4,
        secondNum: 2,
        operation: EOperation.AddOperation,
        choices: [2, 6, 9],
        answer: 1,
      },
      {
        firstNum: 5,
        secondNum: 2,
        operation: EOperation.SubtractOperation,
        choices: [3, 2, 9],
        answer: 0,
      },
      {
        firstNum: 3,
        secondNum: 2,
        operation: EOperation.SubtractOperation,
        choices: [1, 3, 5],
        answer: 0,
      },
    ],
  },
  {
    title: "Các khối",
    video: "guNdJ5MtX1A",
    type: ELessonType.OBJECTIVE_TEST,
    exams: [
      {
        imageSource: require("../../assets/quiz/cau.jpeg"),
        question: "Đây là hình gì?",
        choices: [
          "Hình hộp chữ nhật",
          "Hình cầu",
          "Hình lăng trụ",
          "Hình lập phương",
        ],
        answer: 1,
      },
      {
        imageSource: require("../../assets/quiz/langtru.jpeg"),
        question: "Đây là hình gì?",
        choices: [
          "Hình hộp chữ nhật",
          "Hình cầu",
          "Hình lăng trụ",
          "Hình lập phương",
        ],
        answer: 2,
      },
    ],
  },
];

export const allBadges: IListBadges = {
  1: {
    image: require("../../assets/badges/badge-1.png"),
  },
  2: {
    image: require("../../assets/badges/badge-2.png"),
  },
  3: {
    image: require("../../assets/badges/badge-3.png"),
  },
  4: {
    image: require("../../assets/badges/badge-4.png"),
  },
  5: {
    image: require("../../assets/badges/badge-5.png"),
  },
  6: {
    image: require("../../assets/badges/badge-6.png"),
  },
  7: {
    image: require("../../assets/badges/badge-7.png"),
  },
  8: {
    image: require("../../assets/badges/badge-8.png"),
  },
};

export const quizzes: { [key: string]: IQuiz[] } = {
  [EOperation.MultiOperation]: [
    {
      firstNum: 20,
      secondNum: 20,
      operation: EOperation.MultiOperation,
      choices: [399, 402, 400],
      answer: 400
    },
    {
      firstNum: 27,
      secondNum: 19,
      operation: EOperation.MultiOperation,
      choices: [516, 512, 513],
      answer: 513
    },
    {
      firstNum: 27,
      secondNum: 18,
      operation: EOperation.MultiOperation,
      choices: [489, 485, 486],
      answer: 486
    },
    {
      firstNum: 30,
      secondNum: 14,
      operation: EOperation.MultiOperation,
      choices: [422, 420, 419],
      answer: 420
    },
    {
      firstNum: 17,
      secondNum: 13,
      operation: EOperation.MultiOperation,
      choices: [221, 216, 224],
      answer: 221
    },
    {
      firstNum: 20,
      secondNum: 21,
      operation: EOperation.MultiOperation,
      choices: [424, 420, 423],
      answer: 420
    },
    {
      firstNum: 30,
      secondNum: 16,
      operation: EOperation.MultiOperation,
      choices: [477, 480, 476],
      answer: 480
    },
    {
      firstNum: 6,
      secondNum: 30,
      operation: EOperation.MultiOperation,
      choices: [181, 180, 183],
      answer: 180
    },
    {
      firstNum: 8,
      secondNum: 8,
      operation: EOperation.MultiOperation,
      choices: [64, 68, 65],
      answer: 64
    },
    {
      firstNum: 26,
      secondNum: 17,
      operation: EOperation.MultiOperation,
      choices: [440, 438, 442],
      answer: 442
    },
    {
      firstNum: 18,
      secondNum: 23,
      operation: EOperation.MultiOperation,
      choices: [410, 414, 411],
      answer: 414
    },
    {
      firstNum: 23,
      secondNum: 6,
      operation: EOperation.MultiOperation,
      choices: [140, 136, 138],
      answer: 138
    },
    {
      firstNum: 18,
      secondNum: 19,
      operation: EOperation.MultiOperation,
      choices: [342, 346, 344],
      answer: 342
    },
    {
      firstNum: 13,
      secondNum: 13,
      operation: EOperation.MultiOperation,
      choices: [171, 172, 169],
      answer: 169
    },
    {
      firstNum: 22,
      secondNum: 22,
      operation: EOperation.MultiOperation,
      choices: [480, 484, 481],
      answer: 484
    },
    {
      firstNum: 11,
      secondNum: 15,
      operation: EOperation.MultiOperation,
      choices: [165, 160, 163],
      answer: 165
    },
    {
      firstNum: 13,
      secondNum: 2,
      operation: EOperation.MultiOperation,
      choices: [24, 26, 27],
      answer: 26
    },
    {
      firstNum: 16,
      secondNum: 24,
      operation: EOperation.MultiOperation,
      choices: [385, 381, 384],
      answer: 384
    },
    {
      firstNum: 25,
      secondNum: 29,
      operation: EOperation.MultiOperation,
      choices: [728, 723, 725],
      answer: 725
    },
    {
      firstNum: 19,
      secondNum: 16,
      operation: EOperation.MultiOperation,
      choices: [302, 304, 299],
      answer: 304
    },
    {
      firstNum: 12,
      secondNum: 6,
      operation: EOperation.MultiOperation,
      choices: [69, 72, 71],
      answer: 72
    },
    {
      firstNum: 2,
      secondNum: 9,
      operation: EOperation.MultiOperation,
      choices: [15, 22, 18],
      answer: 18
    },
    {
      firstNum: 5,
      secondNum: 1,
      operation: EOperation.MultiOperation,
      choices: [7, 9, 5],
      answer: 5
    },
    {
      firstNum: 19,
      secondNum: 2,
      operation: EOperation.MultiOperation,
      choices: [34, 40, 38],
      answer: 38
    },
    {
      firstNum: 12,
      secondNum: 4,
      operation: EOperation.MultiOperation,
      choices: [46, 48, 47],
      answer: 48
    },
    {
      firstNum: 4,
      secondNum: 9,
      operation: EOperation.MultiOperation,
      choices: [36, 34, 33],
      answer: 36
    },
    {
      firstNum: 7,
      secondNum: 4,
      operation: EOperation.MultiOperation,
      choices: [25, 24, 28],
      answer: 28
    },
    {
      firstNum: 3,
      secondNum: 19,
      operation: EOperation.MultiOperation,
      choices: [58, 57, 56],
      answer: 57
    },
    {
      firstNum: 13,
      secondNum: 18,
      operation: EOperation.MultiOperation,
      choices: [235, 233, 234],
      answer: 234
    },
    {
      firstNum: 20,
      secondNum: 18,
      operation: EOperation.MultiOperation,
      choices: [357, 363, 360],
      answer: 360
    }
  ],
  [EOperation.DivideOperation]: [
    {
      firstNum: 95,
      secondNum: 19,
      operation: EOperation.DivideOperation,
      choices: [5, 9, 1],
      answer: 5
    },
    {
      firstNum: 289,
      secondNum: 17,
      operation: EOperation.DivideOperation,
      choices: [17, 19, 12],
      answer: 17
    },
    {
      firstNum: 225,
      secondNum: 15,
      operation: EOperation.DivideOperation,
      choices: [11, 17, 15],
      answer: 15
    },
    {
      firstNum: 36,
      secondNum: 12,
      operation: EOperation.DivideOperation,
      choices: [4, 3, -1],
      answer: 3
    },
    {
      firstNum: 99,
      secondNum: 11,
      operation: EOperation.DivideOperation,
      choices: [6, 9, 8],
      answer: 9
    },
    {
      firstNum: 18,
      secondNum: 18,
      operation: EOperation.DivideOperation,
      choices: [1, 0, -1],
      answer: 1
    },
    {
      firstNum: 221,
      secondNum: 13,
      operation: EOperation.DivideOperation,
      choices: [19, 17, 14],
      answer: 17
    },
    {
      firstNum: 200,
      secondNum: 20,
      operation: EOperation.DivideOperation,
      choices: [14, 5, 10],
      answer: 10
    },
    {
      firstNum: 240,
      secondNum: 20,
      operation: EOperation.DivideOperation,
      choices: [11, 7, 12],
      answer: 12
    },
    {
      firstNum: 154,
      secondNum: 14,
      operation: EOperation.DivideOperation,
      choices: [11, 10, 8],
      answer: 11
    },
    {
      firstNum: 120,
      secondNum: 20,
      operation: EOperation.DivideOperation,
      choices: [3, 7,  6],
      answer: 6
    },
    {
      firstNum: 30,
      secondNum: 15,
      operation: EOperation.DivideOperation,
      choices: [2, 0, -3],
      answer: 2
    },
    {
      firstNum: 15,
      secondNum: 15,
      operation: EOperation.DivideOperation,
      choices: [5, 1, -3],
      answer: 1
    },
    {
      firstNum: 57,
      secondNum: 19,
      operation: EOperation.DivideOperation,
      choices: [3, 7, 4, 6],
      answer: 3
    },
    {
      firstNum: 180,
      secondNum: 18,
      operation: EOperation.DivideOperation,
      choices: [5, 10, 11],
      answer: 10
    },
    {
      firstNum: 20,
      secondNum: 20,
      operation: EOperation.DivideOperation,
      choices: [5, 1, -1],
      answer: 1
    },
    {
      firstNum: 192,
      secondNum: 12,
      operation: EOperation.DivideOperation,
      choices: [12, 16, 19],
      answer: 16
    },
    {
      firstNum: 114,
      secondNum: 19,
      operation: EOperation.DivideOperation,
      choices: [9, 5, 6],
      answer: 6
    },
    {
      firstNum: 180,
      secondNum: 18,
      operation: EOperation.DivideOperation,
      choices: [7, 10, 11],
      answer: 10
    },
    {
      firstNum: 70,
      secondNum: 14,
      operation: EOperation.DivideOperation,
      choices: [9, 3, 5],
      answer: 5
    }
  ],
};
