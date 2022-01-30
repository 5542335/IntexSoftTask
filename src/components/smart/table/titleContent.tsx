import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { ISortedField } from '../../../hooks/useSort';
import sortArrowsASC from '../../icons/sortArrowsASC.svg';
import sortArrowsDESC from '../../icons/sortArrowsDESC.svg';

export const StyledTitleItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;
`;

const StyledHeaderTitleText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #404851;
  user-select: none;
  margin: 0;
`;

export const StyledHeaderTitleImage = styled.div<{ bgImage: string }>`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const titleContent = (title: string, sortedField: ISortedField, onSort: any) => () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  useEffect(() => {
    if (sortedField.field === title.toLowerCase()) {
      setBackgroundImage(`${sortedField.order === 'ASC' ? sortArrowsASC : sortArrowsDESC}`);
    } else {
      setBackgroundImage('');
    }
  }, [sortedField]);

  return (
    <StyledTitleItemWrapper onClick={onSort(title)}>
      <StyledHeaderTitleText>{title}</StyledHeaderTitleText>
      <StyledHeaderTitleImage bgImage={backgroundImage} />
    </StyledTitleItemWrapper>
  );
};
