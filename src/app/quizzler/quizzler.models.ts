export class QuizItem {
  constructor(
  category: string,
  correctAnswer: string,
  difficulty: string,
  incorrectAnswers: string[],
  question: string,
  type: string) { }


}

export class Quiz {
  questions: QuizItem[];
}
