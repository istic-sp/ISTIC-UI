import { addons } from "@storybook/manager-api";
import StorybookTheme from "./StorybookTheme";

addons.setConfig({
  theme: StorybookTheme,
});
