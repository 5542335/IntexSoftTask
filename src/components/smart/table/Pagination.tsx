import styled from 'styled-components';

export const StyledPaginationWrapper = styled.div`
  display: flex;
`;

export const StyledArrowButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
export const StyledArrow = styled.img``;
export const Pagination = () => {
  return (
    <StyledPaginationWrapper>
      <StyledArrowButton>
        <StyledArrow src="leftEndArrow.svg" alt="to the first page" />
      </StyledArrowButton>
      <StyledArrowButton>
        <StyledArrow src="leftArrow.svg" alt="to the previous page" />
      </StyledArrowButton>
      <StyledArrowButton>
        <StyledArrow src="rightArrow.svg" alt="to the next page" />
      </StyledArrowButton>
      <StyledArrowButton>
        <StyledArrow src="rightEndArrow.svg" alt="to the last page" />
      </StyledArrowButton>
    </StyledPaginationWrapper>
  );
};
