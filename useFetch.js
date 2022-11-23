import { useEffect, useState } from "react";

export const useFetch = (url) => {
  
  const [state, setState] = useState({
    data: null,
    IsLoadding: true,
    hasError: null
  });

  const getFetch = async() => {

    setState(
      {
        ...state,
        IsLoadding: true
      }
    );

    const resp = await fetch(url);
    const data = await resp.json();

    setState({
      data,
      IsLoadding: false,
      hasError: null}
    );
  }

  useEffect(() => {
    
    getFetch();

  }, [url])
  
  return {
    data: state.data,
    IsLoadding: state.IsLoadding,
    hasError: state.hasError
  };
}
