import { useEffect } from 'react';

export const LoggingInDisplay = ({
  title = 'Logging you into',
  message,
}: {
  title?: string;
  message: string;
}) => {
  return (
    <div>
      <main className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto py-12 sm:py-20">
          <div className="text-center">
            <p className="text-xl font-semibold text-primary dark:text-primary-light">{title}</p>
            <h1 className="mt-2 text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight sm:text-4xl sm:tracking-tight">
              Mintlify Doc Writer
            </h1>
            <p className="mt-2 text-lg text-slate-500 dark:text-slate-400">{message}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default function VSCode() {
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    window.location.replace(`vscode://mintlify.document/auth?code=${code}`);
  }, []);
  return <LoggingInDisplay message="Bringing you back to VS Code" />;
}
