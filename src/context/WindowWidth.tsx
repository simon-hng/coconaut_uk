import * as React from 'react';

export const WindowWidthContext = React.createContext(window.innerWidth);

export const WindowWidthProvider = (props: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setWindowWidth(window.innerWidth);
      },
      false
    );
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {props.children}
    </WindowWidthContext.Provider>
  );
};
