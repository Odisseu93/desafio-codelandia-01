import { useId } from 'react'

type InputProps = {
  label?: string,
  type: React.ComponentProps<'input'>['type']
} & React.ComponentProps<'input'>

const Input = ({label, type, ...rest}: InputProps) => {
  const id = useId()
  return (
    <>
    {label && <label htmlFor={id}>{label}</label>}
      <input id={id} type={type} {...rest}/>
    </>
  );
};

export default Input