import styled from 'styled-components';

export const StyledTitleItemWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
`;

const StyledHeaderTitleText = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #404851;
  user-select: none;
  margin: 0;
`;

export const StyledHeaderTitleImage = styled.div`
  width: 18px;
  height: 18px;
  margin-left: 10px;
  background-image: url('sortArrows.svg');
  background-repeat: no-repeat;
  cursor: pointer;
`;

export const titleContent = (title: string, onSort: any) => () => {
  return (
    <StyledTitleItemWrapper key={title}>
      <StyledHeaderTitleText>{title}</StyledHeaderTitleText>
      <StyledHeaderTitleImage onClick={onSort(title)} />
    </StyledTitleItemWrapper>
  );
};
