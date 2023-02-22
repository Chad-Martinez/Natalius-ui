import { Container, Box } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { verifyEmail } from '../services/auth-service';
import natalius from '../assets/images/shell.png';
import { toast } from 'react-toastify';

const VerifyPage = () => {
  const history = useHistory();
  const params = useParams();
  const { verifyId } = params;

  const verify = useCallback(async () => {
    try {
      const response = await verifyEmail(verifyId);
      toast.success(response.data.message, 'verify');
      history.push('/');
    } catch (error) {
      toast.error(error.response.data.message, 'verify-error');
    }
  }, [history, verifyId]);

  useEffect(() => {
    verify();
  }, [verify]);
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
