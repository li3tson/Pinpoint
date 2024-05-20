import Styled from 'styled-components'

export const Wrapper = Styled.header`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: flex-end;

  .leftSide {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-right: 24rem;

    .leftSide__title {
      font-size: 3rem;
    }

    .leftSide__description {
      width: 20rem;
      font-size: 1rem;
      margin-top: 0.2rem;
    }
  }

  .rightSide {
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    gap: 1rem;

    .rightSide__select {
      width: 8rem;
      height: 3rem;
      font-size: 1rem;
      border: 2px solid ${({ theme }) => theme.colors.gray[900]};
      border-radius: 0;
      padding: 0.5rem;
      box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.gray[900]};
      color: ${({ theme }) => theme.colors.gray[900]};
      background-color: ${({ theme }) => theme.colors.gray[50]};
      cursor: pointer;
    }
  }
`
