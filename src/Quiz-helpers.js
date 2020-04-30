export const findQuestion = (questions=[], questionId) =>
  questions.find(question => question.id === questionId)

export const findAnswers = (answers=[], answerId) =>
  answers.find(answer => answer.id === answerId)

export const getAnswersForQuestions = (answers=[], questionId) => (
  (!questionId)
    ? answers
    : answers.filter(answer => answer.questionId === questionId)
)