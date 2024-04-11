/* eslint no-use-before-define: 0 */
import React from 'react';
import {StyledFieldset, StyledRadio, StyledLabel} from './styles/components.styles';
import {DateType} from './types/date-range';

type DateRangeProps = {
  dateRange: DateType;
  onRangeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const DateRange: React.FC<DateRangeProps> = ({
  dateRange,
  onRangeChange,
}) => {
  return (
    <div>
      <StyledFieldset>
        <legend>Choose date span</legend>
        <StyledRadio>
          <input
            type='radio'
            id='oneweek'
            value='oneweek'
            checked={dateRange === DateType.OneWeek}
            onChange={onRangeChange}
          />
          <StyledLabel className='radiolabel' htmlFor='oneweek'>
            1 week
          </StyledLabel>
        </StyledRadio>
        <StyledRadio>
          <input
            type='radio'
            id='twoweek'
            value='twoweek'
            checked={dateRange === DateType.TwoWeek}
            onChange={onRangeChange}
          />
          <StyledLabel htmlFor='twoweek'>2 weeks</StyledLabel>
        </StyledRadio>
        <StyledRadio>
          <input
            type='radio'
            id='threeweek'
            value='threeweek'
            checked={dateRange === DateType.ThreeWeek}
            onChange={onRangeChange}
          />
          <StyledLabel htmlFor='threeweek'>3 weeks</StyledLabel>
        </StyledRadio>
      </StyledFieldset>
    </div>
  );
};
