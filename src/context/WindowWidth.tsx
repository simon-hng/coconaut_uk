import * as React from 'react';

export const WindowWidthContext = React.createContext(window.innerWidth);

export const WindowWidthProvider = ({ children }): JSX.Element => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setWindowWidth(window.innerWidth);
        console.log(window.innerWidth);
      },
      false
    );
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};
