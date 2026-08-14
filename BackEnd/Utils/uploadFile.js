import multer from "multer";
import path from "path";
import { __direname } from "../app.js";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __direname+'/Public'); 
  },
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
  },
});
const upload = multer({ storage: storage });
export default upload;
