import {RawData} from '../types/raw-data';
import * as Plotly from 'plotly.js';

export const dataFormatter = (rawData: RawData): Plotly.Data[] => [
  {
    x: rawData.blockchain.tg_growth_index.map((item) => new Date(item.date)),
    y: rawData.blockchain.tg_growth_index.map((item) => item.value),
    name: 'Blockchain',
    type: 'scatter',
    mode: 'lines',
  },
  {
    x: rawData.cumulative.tg_growth_index.map((item) => new Date(item.date)),
    y: rawData.cumulative.tg_growth_index.map((item) => item.value),
    name: 'Cumulative',
    type: 'scatter',
    mode: 'lines',
  },
];
