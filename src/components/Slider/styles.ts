import styled from "styled-components";

export const Styles = styled.div`
  .carousel-item {
    height: 510px;
    @media (max-width: 768px) {
      height: 380px;
    }
    @media (max-width: 576px) {
      height: 260px;
    }
    @media (max-width: 380px) {
      height: 150px;
    }

    h2 {
      @media (max-width: 576px) {
        font-size: 20px;
      }
    }

    p {
      @media (max-width: 576px) {
        font-size: 10px;
      }
    }
  }
`;
