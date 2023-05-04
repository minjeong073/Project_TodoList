import React from "react";
import styled from "styled-components";

const InsertForm = styled.form`
  background: #f8f9fa;
  padding: 30px;
  border: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  box-sizing: border-box;
`;

const TodoCreate = () => {
  return (
    <>
      <InsertForm>
        <Input autoFocus placeholder="todo 입력 후 Enter 를 누르세요" />
      </InsertForm>
    </>
  );
};

export default React.memo(TodoCreate);
