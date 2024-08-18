import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    console.log(file);
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

// const upload = multer({
//   storage,
//   limits: { fileSize: 1000000 * 100 },
//   fileFilter(req, file, cb) {
//     if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
//       return cb(new Error("Please upload an image"));
//     }
//     cb(undefined, true);
//   },
// });
export const upload = multer({
  storage,
});
