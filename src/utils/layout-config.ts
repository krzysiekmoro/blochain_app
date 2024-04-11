import {DateType} from '../types/date-range';
import {LayoutConfig} from '../types/layout';

export const defaultLayout = {
  title: 'Chain comparison',
  width: 1400,
  height: 900,
  xaxis: {
    range: ['2023-04-03', '2023-04-10'],
    autorange: false,
  },
};

export const giveRange = (dateRange: DateType): string[] => {
  switch (dateRange) {
    case 'twoweek':
      return ['2023-04-03', '2023-04-17'];
    case 'threeweek':
      return ['2023-04-03', '2023-04-24'];
    default:
      return ['2023-04-03', '2023-04-10'];
  }
};

export const layoutConfig = (dateRange: DateType): LayoutConfig => {
  const range = giveRange(dateRange);
  return {
    ...defaultLayout,
    xaxis: {
      range,
      autorange: false,
    },
  };
};


