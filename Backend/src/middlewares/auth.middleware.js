import { asyncHandler } from "../utils/asyncHandler";

export const registerUser = asyncHandler(async (req, res, next) => {
  req.cookies?.accessToken || req.header("Authorization");
});
