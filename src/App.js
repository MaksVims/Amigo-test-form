import React from 'react';
import SignUpForm from "./components/SignUpForm";

const styled = {
  display: 'flex',
  justifyContent: 'center'
}

const App = () => {
  return (
    <div style={styled}>
      <div style={{width: '100%', padding: 50}}>
        <SignUpForm/>
      </div>
    </div>
  );
};

export default App;