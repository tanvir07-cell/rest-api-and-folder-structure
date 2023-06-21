import { userHomeServices } from "../Services/userHomeService.js";
export const userHomeController = (req, res) => {
  // controller er service ba functionality gula ei userHomeService file e thakbe
  userHomeServices(req, res);
};
