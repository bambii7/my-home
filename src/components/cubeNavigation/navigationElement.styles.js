import styled from 'styled-components';

export const Blob = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    height: 800px;
    position: absolute;
    width: 800px;
    transform: ${({ isSelected }) => (isSelected ? 'scale(10) !important' : 'scale(1)')};
    transition: all 1000ms ease-in-out;
  }
  @media screen and (max-width: 800px) {
    > svg {
      display: none;
    }
  }
  &:hover {
    svg {
      transform: scale(1.1);
    }
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  > svg {
    margin-right: 20px;
  }
`;

export const MenuText = styled.span`
  display: flex;
  justify-content: center;

  a {
    color: white;
    font-size: 70px;
    padding-left: 10px;
    padding-right: 10px;
    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

export const SocialIcon = styled.div`
  @media screen and (max-width: 800px) {
    > a {
      font-size: 40px;
    }
  }
  &:hover {
    transform: scale(1.25);
  }
  transition: all 200ms ease-in-out;
`;
