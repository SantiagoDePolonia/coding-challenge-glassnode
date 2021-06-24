import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import MainTemplate from '../templates/MainTemplate';
import Spinner from '../molecules/Spinner';
import ErrorMessage from '../molecules/ErrorMessage';

import {getDifficultiesData} from '../../features/difficulty/difficultyThunk';
import getHighchartsOptions from '../../helpers/getHighchartsOptions';

const highchartsOptions = getHighchartsOptions('Difficulty metric', [{
    type: "column",
    name: 'Difficulty',
    yAxis: 1,
    data: []
  }, {
    name: 'Price USD',
    data: []
  }]
);

function Difficulty() {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.difficulty.isLoading);
  const isError = useSelector(state => state.difficulty.isError);

  const dataDifficulties = useSelector(state => state.difficulty.dataDifficulties);
  const dataPrices = useSelector(state => state.difficulty.dataPrices);


  useEffect(() => dispatch(getDifficultiesData()),
    []
  );

  highchartsOptions.series[0].data = dataDifficulties;
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

export default Difficulty;
