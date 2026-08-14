import { validationResult } from "express-validator";

export const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: errors
        .array()
        .map((err) => err.msg)
        .join(" | "),
    });
  }

  next();
};
