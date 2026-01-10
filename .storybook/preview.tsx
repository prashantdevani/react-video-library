import type { Preview } from "@storybook/react";
import "../src/index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../src/store/loginSlice";

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
  preloadedState: {
    login: {
      isUserLoggedIn: true,
      userInfo: {
        id: "1",
        username: "StoryUser",
        emailId: "story@test.com",
        token: "123",
      },
      loading: false,
      error: null,
    },
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
};

export default preview;
