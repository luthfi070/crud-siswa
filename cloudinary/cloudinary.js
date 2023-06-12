const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "luthfi-cloud",
  api_key: "464348881963733",
  api_secret: "_Kc8XFszSqnoLgN6bqTxM12St04",
  secure: true,
});

module.exports = uploadToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result.secure_url);
      }
    });
  });
};
