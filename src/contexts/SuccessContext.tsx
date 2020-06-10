import React from 'react';
import { getContext, getProvider } from '../helpers/contextHelpers';

const SuccessContext = React.createContext(false);

function useSuccess() {
 return getContext(SuccessContext, 'SuccessProvider');
}

function SuccessProvider(props:any) {
  const [success, setSuccess] = React.useState(false);

  return getProvider(SuccessContext, success, setSuccess, props);
}

export default { SuccessProvider, useSuccess };