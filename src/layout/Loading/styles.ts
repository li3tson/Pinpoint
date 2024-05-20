import Styled from 'styled-components'

export const Wrapper = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .wrapper__cube {
    width: 4rem;
    height: 4rem;

    .cube__part {
      width: 33%;
      height: 33%;
      background-color: ${({ theme }) => theme.colors.gray[700]};
      float: left;
      -webkit-animation: cubeGridScaleDelay 1.3s infinite ease-in-out;
              animation: cubeGridScaleDelay 1.3s infinite ease-in-out;
    }

    .cube__part--1 {
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s; }
    .cube__part--2 {
      -webkit-animation-delay: 0.3s;
              animation-delay: 0.3s; }
    .cube__part--3 {
      -webkit-animation-delay: 0.4s;
              animation-delay: 0.4s; }
    .cube__part--4 {
      -webkit-animation-delay: 0.1s;
              animation-delay: 0.1s; }
    .cube__part--5 {
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s; }
    .cube__part--6 {
      -webkit-animation-delay: 0.3s;
              animation-delay: 0.3s; }
    .cube__part--7 {
      -webkit-animation-delay: 0s;
              animation-delay: 0s; }
    .cube__part--8 {
      -webkit-animation-delay: 0.1s;
              animation-delay: 0.1s; }
    .cube__part--9 {
      -webkit-animation-delay: 0.2s;
              animation-delay: 0.2s; }

    @-webkit-keyframes cubeGridScaleDelay {
      0%, 70%, 100% {
        -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
      } 35% {
        -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
      }
    }

    @keyframes cubeGridScaleDelay {
      0%, 70%, 100% {
        -webkit-transform: scale3D(1, 1, 1);
                transform: scale3D(1, 1, 1);
      } 35% {
        -webkit-transform: scale3D(0, 0, 1);
                transform: scale3D(0, 0, 1);
      }
    }
  }
`
