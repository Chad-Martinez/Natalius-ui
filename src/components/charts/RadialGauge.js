import { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import GaugeChart from 'react-gauge-chart';

const RadialGauge = ({ title, data, id }) => {
  return (
    <Fragment>
      <GaugeChart
        id={id}
        nrOfLevels={3}
        colors={['#a6ce39', 'orange', 'red']}
        arcWidth={0.3}
        percent={0.33}
        textColor={'black'}
      />

      <Grid container item justifyContent={'center'}>
        <Grid item xs={5}>
          <Typography fontSize={20} color='#000033' align='center'>
            {title}
          </Typography>
        </Grid>
        <Grid xs={1} container item alignItems={'center'}>
          <ArrowDownward />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default RadialGauge;
