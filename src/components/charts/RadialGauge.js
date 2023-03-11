import { Fragment } from 'react';
import { Grid, Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import GaugeChart from 'react-gauge-chart';

const RadialGauge = ({ title, data, id }) => {
  const { percent, change } = data ? data : {};

  return (
    <Fragment>
      <GaugeChart
        id={id}
        nrOfLevels={3}
        colors={['#a6ce39', 'orange', 'red']}
        arcWidth={0.3}
        percent={percent || 0}
        textColor={'black'}
        changeOverPrevious
      />

      <Grid container item justifyContent={'center'}>
        <Grid item xs={5}>
          <Typography fontSize={20} color='#000033' align='center'>
            {title}
          </Typography>
        </Grid>
        {change === 'higher' && (
          <Grid xs={1} container item alignItems={'center'}>
            <ArrowUpward
              sx={{
                color: 'red',
              }}
            />
          </Grid>
        )}
        {change === 'lower' && (
          <Grid xs={1} container item alignItems={'center'}>
            <ArrowDownward
              sx={{
                color: '#3eec43',
              }}
            />
          </Grid>
        )}
      </Grid>
    </Fragment>
  );
};

export default RadialGauge;
