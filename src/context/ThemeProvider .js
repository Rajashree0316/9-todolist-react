import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'toggleTheme':
      return !state;
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  // const [isDark, dispatch] = useReducer(ThemeReducer,false,()=>{
  //     const LS_theme = localStorage.getItem('theme');
  //     return LS_theme ? Boolean(LS_theme):false;
  // });
  const [isDark, dispatch] = useReducer(ThemeReducer, null, () => {
    const LS_theme = localStorage.getItem('theme');
    return LS_theme ? LS_theme === true : false;
  });


  useEffect(() => {
    localStorage.setItem('theme', isDark.toString());
    if (isDark) {
      document.querySelector('.App').classList.add('dark')
    } else {
      document.querySelector('.App').classList.remove('dark')

    }
  }, [isDark])
  return (
    <ThemeContext.Provider value={{ isDark, dispatch }}>
      {children}
    </ThemeContext.Provider>
  )
}



/*things to know
1) Using ls in initial render that's y we are using useEffect()
-->isDark is converted to string
isDark = true --> need to change/add app to dark using querySelector
isDark = false -->remove it
2) Initial initializer function:
--> calculate ls--call theme by getting item which is close to ls
--> in return , we compare ls theme and boolean (which is string) else return false
 Boolean('false') = false,
 Boolean('true') = true
3) js implicit function
 ->false-null
 -> change the identity operator
 Boolean(LS_theme)-LS_theme === true
 -> send dispatch in theme provider
4) Switch case
for toggle theme - return current value has state
*/



