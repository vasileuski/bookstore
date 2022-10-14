import React, { ChangeEventHandler } from "react";
import { Button, InputGroup, Form, Container } from "react-bootstrap";
import { useInput } from "../../hooks/useInput";
import { Styles } from "./styles";

interface Input {
  value: string;
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const Input = (props: Input) => {
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
