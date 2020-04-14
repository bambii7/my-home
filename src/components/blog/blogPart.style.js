import styled from 'styled-components';

export const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.red};
  font-size: 14px;
  span {
    margin-left: 10px;
  }
`;
export const Abstract = styled.div`
  margin-top: 12px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.grey};
`;

export const BlogPartContainer = styled.article`
  padding: 25px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 5px;
  line-height: 1.5;

  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    transition: all 300ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 4px 8px;
  }
`;

export const BlogBox = styled.div`
  height: 100%;
  text-align: start;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconSection = styled.div`
  font-size: 50px;
  color: ${({ theme }) => theme.red};
`;

export const TextSection = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

export const Title = styled.span`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.2;
`;
