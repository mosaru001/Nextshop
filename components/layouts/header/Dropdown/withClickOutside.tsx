import { useState, useRef, useEffect } from "react";

export default function withClickOutside(
  WrappedComponent: any
): (props: any) => JSX.Element {
  const Component = (props: any) => {
    const [open, setOpen] = useState(false);

    const ref: any = useRef();

    useEffect(() => {
      const handleClickOutside = (event: { target: any }) => {
        if (!ref.current?.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return <WrappedComponent open={open} setOpen={setOpen} ref={ref} />;
  };
  
  return Component;
}

// ref : https://codesandbox.io/s/react-withclickoutside-forked-bok38?fontsize=14&hidenavigation=1&theme=dark&file=/src/withClickOutside.js:0-575
