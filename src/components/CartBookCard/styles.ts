import styled from "styled-components";

export const Styles = styled.div`
  .cart {
    margin: 1rem 0;
  }
  .cart__card {
    display: flex;
  }

  .cart__card-img {
    max-width: 180px;
  }

  .cart__card-title {
    padding-top: 20px;
    font-size: 24px;
    @media (max-width: 576px) {
      display: none;
    }
  }

  .cart__card-price {
    font-weight: bold;
    @media (max-width: 576px) {
      display: none;
    }
  }

  .cart__card-subtitle {
    font-size: 16px;
    @media (max-width: 576px) {
      display: none;
    }
  }

  .cart__card-button {
    margin-left: auto;
    border-radius: 0 0.375rem 0.375rem 0;
    padding: 0 30px;
    @media (max-width: 576px) {
      display: none;
    }
  }

  // Mobile styles

  .cart__card-mb {
    @media (min-width: 576px) {
      display: none;
    }
  }

  .cart__card-title-mb {
    font-size: 20px;

    @media (min-width: 576px) {
      display: none;
    }
  }

  .cart__card-price-mb {
    font-weight: bold;

    @media (min-width: 576px) {
      display: none;
    }
  }

  .cart__card-button-mb {
    display: block;
    width: 100%;
    @media (min-width: 576px) {
      display: none;
    }
  }
`;
