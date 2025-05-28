import { useState } from "react";

export const useToggle = (initialValue=true) =>{
    const [state, setState] = useState(initialValue);

     const toggle = () => setState(prev => !prev);

    //3. 값을 return으로 전달
    return {state,toggle};
}