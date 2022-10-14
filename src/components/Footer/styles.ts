import styled from "styled-components";

export const Styles = styled.div`
  a,
  .navbar-nav .nav-link,
  nav {
    color: rgba(0, 0, 0, 0.55);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.7);
    }
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 576px) {
      font-size: 10px;
    }
  }

  .nav-notation {
    color: #212529;
  }

  .navbar-brand {
    cursor: pointer;
  }

  .navbar > .container {
    align-items: start;
  }
`;
