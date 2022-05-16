import crypto from "crypto";
import fs from "fs";
import multer from "multer";
import { resolve } from "path";

interface IUpload {
  storage: multer.StorageEngine;
}

const upload = (dir: string): IUpload => {
  return {
    storage: multer.diskStorage({
      destination: resolve(__dirname, "..", "..", dir),
      filename: (request, file, cb) => {
        const fileHash = crypto.randomBytes(16).toString("hex");
        const [, ext] = file.originalname.split(".");
        return cb(null, `${fileHash}.${ext}`);
      },
    }),
  };
};

const remove = async (filename: string): Promise<void> => {
  try {
    await fs.promises.stat(filename);
  } catch (error) {
    return;
  }

  await fs.promises.unlink(filename);
};

export { upload, remove };
