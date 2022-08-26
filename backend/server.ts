import { environment } from "./src/frameworks/configs/environment";
import app from "./src/frameworks/web/app";

app.listen(environment.port, () => {
  if (environment.environment == "development") console.log("I'm running");
});