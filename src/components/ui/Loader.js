import { Container } from '@mui/material';
import { PuffLoader } from 'react-spinners';

const Loader = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        height: '100%',
        minHeight: '400px',
        width: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PuffLoader color='#1976d2b3' size={100} />
    </Container>
  );
};

export default Loader;
