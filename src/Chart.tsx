import Plot from 'react-plotly.js';
import {LayoutConfig} from './types/layout';
import React from 'react';
import * as Plotly from 'plotly.js';

type ChartProps = {
  data: Plotly.Data[];
  layout: LayoutConfig;
};

export const Chart: React.FC<ChartProps> = ({ data, layout }) => (
  <Plot data={data} layout={layout} />
);
