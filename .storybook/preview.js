import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
setCompodocJson(docJson);

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
