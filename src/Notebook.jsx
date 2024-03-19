import React, { useEffect, useRef } from 'react';
import { Runtime, Inspector } from '@observablehq/runtime';
import notebook from './notebooks/my-notebook/index.js';


const Notebook = () => {
    const ref = useRef();
  
    useEffect(() => {
      const runtime = new Runtime();
      runtime.module(notebook, Inspector.into(ref.current));
    }, []);
  
    return <div ref={ref} />;
  };
  
  export default Notebook;