import styled from "styled-components";

export const Styles = styled.div`
  .card {
    margin-bottom: 20px;
    @media (max-width: 1200px) {
      margin: 0 auto;
      margin-bottom: 20px;
    }
  }

  .card-image-top {
  }
  .card-title {
    margin-bottom: 20px;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-buttons {
    display: flex;
    justify-content: space-between;
  }

  .btn-warning:hover span {
    display: none;
  }

  .btn-warning:hover:before {
    content: "Add to cart ";
  }
`;
