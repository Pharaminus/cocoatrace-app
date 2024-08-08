import React, { useContext } from 'react';
// import { AuthContext } from './AuthContext';

const Home = () => {
//   const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <p>Bienvenue, {user.name}!</p>
      ) : (
        <p>Vous devez être connecté pour accéder à cette page.</p>
      )}
    </div>
  );
};

export default Home;