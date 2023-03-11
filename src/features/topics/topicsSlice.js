import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      const newTopic = { id, name, icon, quizIds: [] };
      state.topics[id] = newTopic;
    },
    addQuizToTopic: (state, action) => {
      const { quizId, topicId } = action.payload;

      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
