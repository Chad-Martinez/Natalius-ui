import { Container, Box } from '@mui/material';
import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { verifyEmail } from '../services/auth-service';
import natalius from '../assets/images/shell.png';

const VerifyPage = () => {
  const params = useParams();
  const { verifyId } = params;

  useEffect(() => {
    verifyEmail(verifyId);
  }, [verifyId]);
  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component='img'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 100,
            marginBottom: 3,
            alignItems: 'center',
          }}
          src={natalius}
        />
        <h3>
          Your email has been verified please <Link to='/'>login</Link> to
          continue
        </h3>
      </Box>
    </Container>
  );
};

export default VerifyPage;
