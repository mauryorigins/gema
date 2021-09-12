// --- Dependencys
import React from 'react';
// ---Components
import LoadingFullScreen from './LoadingFullScreen';

// -----------------------------------------COMPONENT-----------------------

export default function GlobalComponents() {
  // Redux States
  //const { isLoading } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  return (
    <>
      <LoadingFullScreen  />
    </>
  );
}

