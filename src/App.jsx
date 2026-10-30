import React, { useState } from 'react';
import UserStatus from './UserStatus';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
  setIsLoggedIn(prevState => {
    const nextState = !prevState;
    console.log("Статус пользователя изменился на:", nextState ? "Вошел" : "Вышел");
    return nextState;
  });
};

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Условный рендеринг в React</h1>
      <UserStatus isLoggedIn={isLoggedIn} />
      <button onClick={toggleLogin} style={{ padding: '8px 16px', cursor: 'pointer' }}>
        {isLoggedIn ? 'Выйти из аккаунта' : 'Имитировать вход'}
      </button>
    </div>
  );
}

export default App;

