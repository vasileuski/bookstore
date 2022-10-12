import styled from "styled-components";

export const Styles = styled.div`
  .card {
    margin-bottom: 20px;
  }

  .card-image {
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
`;
