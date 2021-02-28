import axios from './axiosWrapper';

export default function useFileUpload(file, uploadProgressHandler) {
  const axiosConfig = {
    url: '/upload',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: file,
    onUploadProgress: uploadProgressHandler,
  };

  return axios(axiosConfig);
}
