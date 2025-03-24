

import { useEffect } from "react";

export function useTitle(title){
  useEffect(()=>{
    console.log(title)
    document.title = `Title - ${title}`;
  }, [title])
}