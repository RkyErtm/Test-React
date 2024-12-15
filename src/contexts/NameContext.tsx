import React, {PropsWithChildren} from 'react';
type NameContextType = {
  name: string;
};

export const NameContext = React.createContext<NameContextType>({name: ''}); // bu bir havuz aslında

export const NameContextProvider = ({children}: PropsWithChildren) => {
  //bu provider ise boru görevi görür.
  return (
    <NameContext.Provider value={{name: 'R. Ertem'}}>
      {children}
    </NameContext.Provider>
  );
};
