import { v2 as cloudinary } from 'cloudinary';
import { upload } from './multerConfig.js';

cloudinary.config({
  cloud_name: 'dxknq7kkp',
  api_key: '197788948395454',
  api_secret: '12CnIlxVNuwszzeCvFFeCiDoTNE'
});

// Exporta funciones específicas que necesites usar
export const uploadImage = (options) => cloudinary.uploader.upload(options);
export const deleteImage = (publicId) => cloudinary.uploader.destroy(publicId);
export const getPublicIdFromUrl = (imageUrl) => cloudinary.url(imageUrl, { fetch_metadata: true }).public_id;
export const createUploadPreset = (presetName, options) => cloudinary.api.create_upload_preset(presetName, options);
export const deleteUploadPreset = (presetName) => cloudinary.api.delete_upload_preset(presetName);
