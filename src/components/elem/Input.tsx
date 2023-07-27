import styled from "styled-components";

type Props = {
  value: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

const Input = ({ value, id, onChange, type }: Props) => {
  return <InputForm value={value} id={id} onChange={onChange} type={type} />;
};

const InputForm = styled.input`
  width: 200px;
  height: 15px;
  padding: 5px;
  outline: none;
`;

export default Input;
