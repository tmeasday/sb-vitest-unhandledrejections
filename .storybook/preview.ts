import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

window.addEventListener("unhandledrejection", function (e) {
  console.log("vvv -- Caught handled rejection -- vvv");
  console.log(e.reason);
  console.log(e.reason?.stack);
  console.log("^^^ -- Done in caught unhandled rejection -- ^^^");
});
