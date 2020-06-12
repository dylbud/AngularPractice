export class QuizItem {
  constructor(
    public category: string,
    public correctAnswer: string,
    public difficulty: string,
    public incorrectAnswers: string[],
    public question: string,
    public type: string,
    public quizItemAnswers: QuizItemAnswer[]
  ) {}
}

export class Quiz {
  quizItems: QuizItem[];
  quizItemColor: string;

  constructor() {
    this.quizItems = new Array<QuizItem>();
  }
}

export class QuizItemAnswer {
  value: string;
  isCorrect: boolean;
}
