import React from 'react';
import SignUpForm from "./components/SignUpForm";


/*
    * Стоит выбрать единый способ определения стилей в проекте.
    * В модулях / css-in-js / inline / как-то еще. Но не все сразу
 */
const styled = {
  display: 'flex',
  justifyContent: 'center'
}

const App = () => {
  return (
    <div style={styled}>
      {/* в проекте ведь есть scss, зачем здесь inline ? */}
      <div style={{width: '100%', padding: 50}}>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default App;
