import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    files:5,
    fileSize: 5 * 1024 * 1024,
  },
});

export default upload;

export const parseProductBody = (req, res, next) => {
  try {
    if (req.body.price) {
      req.body.price = JSON.parse(req.body.price);
    }

    if (req.body.variants) {
      req.body.variants = JSON.parse(req.body.variants);
    }

    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Invalid product JSON data",
    });
  }
};