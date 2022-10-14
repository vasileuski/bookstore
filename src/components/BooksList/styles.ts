import styled from "styled-components";

export const Styles = styled.div`
  .card-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-right: 32px;

    @media (max-width: 1400px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;
