import { createConsola, LogLevels } from "consola";
import { IS_DEV } from "./const";

const logger = createConsola({
  level: IS_DEV ? LogLevels.debug : LogLevels.info,
  defaults: {
  tag: "whattt! GPT",
  },
});

export default logger;
