// File upload service
const multer = require('multer');
const path = require('path');
const fs = require('fs').promises;

class FileUploadService {
  constructor() {
    this.uploadDir = path.join(__dirname, '../uploads');
    this.allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    this.maxSize = 5 * 1024 * 1024; // 5MB

    this.storage = multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, this.uploadDir);
      },
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
      }
    });

    this.fileFilter = (req, file, cb) => {
      if (this.allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type. Only images are allowed.'), false);
      }
    };

    this.upload = multer({
      storage: this.storage,
      fileFilter: this.fileFilter,
      limits: { fileSize: this.maxSize }
    });
  }

  async deleteFile(filename) {
    try {
      const filePath = path.join(this.uploadDir, filename);
      await fs.unlink(filePath);
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      return false;
    }
  }

  getUploadMiddleware() {
    return this.upload;
  }
}

module.exports = new FileUploadService();