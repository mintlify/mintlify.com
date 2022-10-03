import { useEffect } from 'react';
import { LoggingInDisplay } from './vscode';

export default function VSCodeInsiders() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const scheme = urlParams.get('scheme');
    const event = urlParams.get('event');

    if (scheme) {
      window.location.replace(`${scheme}://mintlify.document/return?event=${event}`);
    }
  }, []);
  return <LoggingInDisplay title="Opening" message="You may now close this tab" />;
}
