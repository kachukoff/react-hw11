import React from 'react';

function UserStatus({ isLoggedIn }) {
  return (
    <div style={{ margin: '15px 0', fontSize: '18px' }}>
      {isLoggedIn ? (
        <span>Добро пожаловать, пользователь!</span>
      ) : (
        <button onClick={() => alert('Логика входа')}>Войти</button>
      )}
    </div>
  );
}

export default UserStatus;
