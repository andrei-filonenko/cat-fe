import { useMutation } from "@apollo/client";
import { gql } from "../__generated__";
import React, { useState } from "react";

const UPDATE_PROMCODE = gql(/* GraphQL */ `
  mutation UpdatePromcode($code: String!) {
    updatePromcode(code: $code) {
      promcode,
      discountPercentage
    }
  }
`);

export default function Promcode({ promcode, discount }: { promcode?: string, discount: number }) {
  const [setPromcodeMutation, _] = useMutation(UPDATE_PROMCODE);
  const [inputValue, setInputValue] = useState(promcode || '');

  const isEmpty = inputValue.length === 0;
  const isValid =
    inputValue.length > 5 && inputValue.length < 11;

  const caption =
    (isEmpty || isValid) ? (
      <div className="caption">{discount}% discount</div>
    ) : (
      <div className="error">must be 6-9 characters long</div>
    );

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    event.preventDefault();
    setInputValue(event.currentTarget.value);
  }

  function handleSubmit (e: React.SyntheticEvent) {
    e.stopPropagation();
    e.preventDefault();
    setPromcodeMutation({
      variables: {
        code: inputValue,
      },
      refetchQueries: ["CartQuery"],
    }); 
  }

  return (
    <form className="promcode" onSubmit={handleSubmit}>
      <input
        type="text"
        name="promcode"
        className="promcode-input"
        onChange={handleChange}
        placeholder="Promcode"
        value={inputValue || ""}
      />
      <button type="submit" className="promcode" onClick={handleSubmit}>Apply</button>
      {caption}
    </form>
  );
}
