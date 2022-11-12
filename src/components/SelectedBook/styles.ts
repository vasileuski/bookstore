import styled from "styled-components";

export const Styles = styled.div`
  .selected-book {
    display: grid;
    grid-template: repeat(20, 5%) / repeat(20, 5%);
    @media (max-width: 576px) {
    }
  }

  .arrow-button {
    grid-column: 1 / 3;
    grid-row: 2 / 5;
    @media (max-width: 576px) {
      grid-row: 2 / 4;
      padding: 1px 4px;
    }
  }

  .arrow-button svg {
    @media (max-width: 576px) {
      width: 1.2em;
      height: 1.2em;
    }
  }

  .selected-book_title {
    grid-column: 4 / 21;
    grid-row-start: 2;
  }

  .selected-book_img-cover {
    grid-column: 1 / 8;
    grid-row: 5 / 21;
    @media (max-width: 576px) {
      grid-column: 1 / 18;
      grid-row: 3 / 5;
    }
  }

  .selected-book_subtitle {
    grid-column: 8 /21;
    grid-row: 7 / 9;
    @media (max-width: 992px) {
      grid-column: 9 / 21;
    }
    @media (max-width: 768px) {
      grid-column: 11 / 21;
    }
    @media (max-width: 576px) {
      grid-row: 16 / 18;
      grid-column: 3 / 18;
    }
  }

  .selected-book_price {
    grid-column: 8 / 21;
    grid-row: 12 / 16;
    @media (max-width: 992px) {
      grid-column: 9 / 21;
    }
    @media (max-width: 768px) {
      grid-column: 11 / 21;
    }
    @media (max-width: 576px) {
      display: none;
    }
  }

  .selected-book_btn-cart {
    grid-column: 8 / 15;
    grid-row: 17 / 20;
    @media (max-width: 992px) {
      grid-column: 9 / 15;
    }
    @media (max-width: 768px) {
      grid-column: 11 / 17;
    }
    @media (max-width: 576px) {
      grid-column: 3 / 18;
      grid-row: 18 / 21;
    }
  }

  .selected-book_btn-cart-price {
    display: none;
    @media (max-width: 576px) {
      display: inline;
      font-size: 20px;
    }
  }

  .arrow-left {
    height: 2em;
    width: 2em;
  }
`;
