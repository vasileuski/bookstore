import React, { ChangeEventHandler } from "react";
import { InputGroup, Form, Container } from "react-bootstrap";

import { Styles } from "./styles";

interface ISearch {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const Search = (props: ISearch) => {
  return (
    <Styles>
      <Container>
        <InputGroup className="my-3">
          <Form.Control
            placeholder="What are you looking for?"
            onChange={props.onChange}
          />
        </InputGroup>
      </Container>
    </Styles>
  );
};
