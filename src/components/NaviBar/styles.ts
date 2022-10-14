import styled from "styled-components";

export const Styles = styled.div`
  a,
  .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.55);
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: rgba(0, 0, 0, 0.7);
    }
  }

  .navbar-brand {
    cursor: pointer;
  }

  .navbar-collapse {
    justify-content: end;
  }
`;
