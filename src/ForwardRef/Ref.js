
import { useRef, forwardRef } from 'react';

const MyInput = forwardRef((props, ref)=>{
   return <input ref={ref} />;
})

export default function MyForm() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

