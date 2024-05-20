import Styled from 'styled-components'

type PropTypes = {
  title: string
}

export const Wrapper = Styled.section<PropTypes>`
  width: 30rem;
  height: 22rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[900]};
  box-shadow: 0.4rem 0.4rem 0 ${({ theme }) => theme.colors.gray[900]};

  .head {
    width: 100%;
    height: 2%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.gray[900]};

    .head__title { }

    .head__list{
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      gap: 0.5rem;

      .list__item {
        width: 1rem;
        height: 1rem;
        border-radius: 50rem;
        border: 2px solid ${({ theme }) => theme.colors.gray[900]};
      }

      .list__item--contrast {
        background-color: ${({ theme }) => theme.colors.gray[900]};
      }
    }
  }

  .context {
    width: 100%;
    height: 90%;
    overflow: ${({ title }) => (title !== 'map' ? 'scroll;' : 'hidden')};
  }
`
