import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import '../i18n.ts';
import { PrimeReactProvider } from 'primereact/api'
import { TailwindCheckbox, TailwindDataTable, TailwindDropdown, TailwindInputText, TailwindPaginator } from './tailwinds/index.ts';

createRoot(document.getElementById('root')!).render(
  <PrimeReactProvider
    value={
      {
        unstyled: true,
        pt: {
          ...TailwindDataTable as any,
          ...TailwindPaginator,
          ...TailwindDropdown,
          ...TailwindInputText,
          ...TailwindCheckbox

        }
      }
    }>
    <App />
  </PrimeReactProvider>,
)
