import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 10rem;
    margin-top: 10%;
  }

  h1 {
    font-size: 1rem;
  }

  button {
    width: max-content;
    height: max-content;
    padding: 1rem;
    margin-top: 4rem;
    border: 2px solid ${({ theme }) => theme.colors.gray[900]};
    box-shadow: 0.3rem 0.3rem 0 ${({ theme }) => theme.colors.gray[900]};
    color: ${({ theme }) => theme.colors.gray[900]};
    background-color: ${({ theme }) => theme.colors.gray[50]};
    cursor: pointer;
  }
`
