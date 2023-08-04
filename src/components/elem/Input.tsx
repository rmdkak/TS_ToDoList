// import styled from "styled-components";

type Props = {
  value: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

const Input = ({ value, id, onChange, type }: Props) => {
  return (
    <input
      className="w-52 h-7 p-1.5 border-[1px] border-black outline-none"
      value={value}
      id={id}
      onChange={onChange}
      type={type}
    />
  );
};

// const InputForm = styled.input`
//   width: 200px;
//   height: 15px;
//   padding: 5px;
//   outline: none;
// `;

export default Input;
