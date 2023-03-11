import { createSlice } from "@reduxjs/toolkit";
import { addQuizToTopic } from "../topics/topicsSlice";

export const createNewQuiz = (payload) => {
  return (dispatch) => {
    // dispatch multiple actions here
    const { id, topicId } = payload;
    dispatch(addQuizToTopic({ id, topicId }));
    dispatch(addQuiz(payload));
  };
};
const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id, name, topicId, cardIds } = action.payload;
      const newQuiz = { id, name, topicId, cardIds };
      state.quizzes[id] = newQuiz;
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
