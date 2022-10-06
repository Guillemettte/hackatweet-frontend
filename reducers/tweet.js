import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: { tweet: null },
};

export const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    tweeter: (state, action) => {
      state.value.tweet = action.payload.tweet;
    },
  },
});

export const { tweeter} = tweetSlice.actions;
export default tweetSlice.reducer;