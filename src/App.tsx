// @ts-nocheck
import React, {useEffect, useState} from 'react';
import './App.css';
import rawData from './data.json';
import {dataFormatter} from './data-parser';
import {Chart} from './Chart';
import {DateRange} from './DateRange';
import {layoutConfig} from './layout-config';
import {StyledWrapper, StyledHeader} from './styles/components.styles';
import {DateType} from './types/date-range';
import {LayoutConfig} from './types/layout';
import * as Plotly from 'plotly.js';
import {defaultLayout} from './layout-config';
// import { loadData } from './data/dataHandler';

function App() {
  const [data, setData] = useState<Plotly.Data[]>([]);
  const [dateRange, setDateRange] = useState<DateType>(DateType.OneWeek);
  const [layout, setLayout] = useState<LayoutConfig>(defaultLayout);

  useEffect(() => {
    // const apiData = loadData();
    setData(dataFormatter(rawData));
  }, []);

  useEffect(() => {
    setLayout(layoutConfig(dateRange));
  }, [dateRange]);

  const onRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: DateType = e.target.value as DateType;
    setDateRange(value);
    setLayout(layoutConfig(dateRange));
  };

  return (
    <div className='App'>
      <StyledHeader>Krzysztof Morawski for Tokenguard</StyledHeader>
      <StyledWrapper>
        <DateRange dateRange={dateRange} onRangeChange={onRangeChange} />
        <Chart data={data} layout={layout} />
      </StyledWrapper>
    </div>
  );
}

export default App;
