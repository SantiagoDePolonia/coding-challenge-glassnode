import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import MainTemplate from '../templates/MainTemplate';
import Spinner from '../molecules/Spinner';
import ErrorMessage from '../molecules/ErrorMessage';

import {getDifficultiesData} from '../../features/hashRate/hashRateThunk';
import getHighchartsOptions from '../../helpers/getHighchartsOptions';

const highchartsOptions = getHighchartsOptions('Hash Rate', [{
    type: "column",
    name: 'Hash Rate',
    yAxis: 1,
    data: []
  }, {
    name: 'Price USD',
    data: []
  }]
);

function HashRate() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.hashRate.isLoading);
  const isError = useSelector(state => state.hashRate.isError);

  const dataHashRates = useSelector(state => state.hashRate.dataHashRates);
  const dataPrices = useSelector(state => state.hashRate.dataPrices);


  useEffect(() => dispatch(getDifficultiesData()),
    []
  );

  highchartsOptions.series[0].data = dataHashRates;
  highchartsOptions.series[1].data = dataPrices;

  if(isError) {
    return (<ErrorMessage />);
  }

  return (
    <MainTemplate>
      {isLoading ?
        <Spinner />
      :
        <HighchartsReact
          containerProps={{ style: { height: "calc(100vh - 70px)" } }}
          highcharts={Highcharts}
          options={highchartsOptions}
        />
      }
    </MainTemplate>
  );
}

export default HashRate;
