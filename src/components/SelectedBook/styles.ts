import styled from "styled-components";

export const Styles = styled.div`
  .selected-book {
    display: grid;
    grid-template: repeat(20, 5%) / repeat(20, 5%);
  }

  .arrow-button {
    grid-column: 1 / 3;
    grid-row: 2 / 5;
  }

  .selected-book_title {
    grid-column: 4 / 21;
    grid-row-start: 2;
  }

  .selected-book_img-cover {
    grid-column: 1 / 8;
    grid-row: 5 / 21;
  }

  .selected-book_subtitle {
    grid-column: 8 /21;
    grid-row: 7 / 9;
  }

  .selected-book_price {
    grid-column: 8 / 21;
    grid-row: 12 / 16;
  }
  .selected-book_btn-cart {
    grid-column: 8 / 15;
    grid-row: 17 / 20;
  }

  .arrow-left {
    height: 2em;
    width: 2em;
  }
`;
