import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 1.1rem;
  line-height: 2.1rem;
  padding: 0.5rem 1rem 1rem 2rem;

  .text--emphasis {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.gray[800]};
  }
`
