import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/ThemeProvider ';
import { TodoProvider } from './context/TodoProvider';
import { MemoProvider } from './context/MemoProvider';

// import { MemoProvider } from './Context/MemoProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <MemoProvider>
        <App />
        </MemoProvider>
      </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
