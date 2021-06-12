import styled from 'styled-components';

export const CardContainer = styled.article`
  width: 280px;
  display: block;
  margin: 60px auto;
  box-shadow: 10px 5px 40px 20px darken(#341cac, 5%);
  transition: 0.25s;

  &:hover {
    box-shadow: 10px 5px 40px 20px darken(#341cac, 10%);
    cursor: pointer;

    .button-primary {
      transform: translate(10px, 0);
    }
  }
`;

export const CardHeader = styled.div`
  height: 150px;
  width: 100%;
  padding: 15px;
  width: 100%;
  background-size: cover;
  color: #fff;
`;

export const CardTitle = styled.h4`
  text-transform: uppercase;
  margin: 0;
`;

export const CardBody = styled.div`
  padding: 15px;
  background-color: #fff;
  width: 100%;
`;

export const CardDate = styled.p`
  font-size: 11px;
  font-weight: 600;
  color: grey;
`;

export const CardBodyText = styled.p`
  padding-bottom: 40px;
  font-size: 13px;
  line-height: 1.8;
`;

export const ProjectsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
