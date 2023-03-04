import { Box, IconButton, TextField } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUploader = ({ setImage, setDeletePhotoURL }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setImage(reader.result);
      setDeletePhotoURL(true);
    };
    reader.readAsDataURL(file);
  };
  return (
    <IconButton variant='contained' component='label'>
      <CloudUploadIcon
        color='primary'
        sx={{
          fontSize: '60px',
        }}
      />
      <Box display={'none'}>
        <TextField
          hidden
          inputProps={{
            accept: 'image/*',
            type: 'file',
          }}
          onChange={handleFileChange}
        />
      </Box>
    </IconButton>
  );
};

export default FileUploader;
