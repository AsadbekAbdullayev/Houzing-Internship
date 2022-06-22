import React from 'react';
// components
import Generic from '../pages/Generic';
import Main from '../pages/Main';
import Proporties from '../pages/Proporties';
import Detail from '../pages/Detail';
import Signin from '../pages/Signin';
import AddProperty from '../pages/AddProperty';
import MyProperty from '../pages/MyProperty';
import Register from '../pages/Register';


export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    Element: <Main />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: 'Properties',
    path: '/properties',
    Element: <Proporties />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: 'Contacts',
    path: '/contacts',
    Element: <Generic />,
    search: '?',
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: 'Detail',
    path: '/detail',
    Element: <Detail />,
    search: '?',
    hidden: true,
    private: false,
  }, {
    id: 5,
    title: 'Signin',
    path: '/signin',
    Element: <Signin />,
    search: '?',
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: 'Register',
    path: '/register',
    Element: <Register />,
    search: '?',
    hidden: true,
    private: false,
  },{
    id: 7,
    title: 'AddProperty',
    path: '/profile/addProperty',
    Element: <AddProperty />,
    search: '?',
    hidden: true,
    private: false,
  },{
    id: 17,
    title: 'editProperty', 
    path: '/profile/addProperty/:id',
    Element: <AddProperty />,
    search: '?',
    hidden: true,
    private: false,
  },{
    id: 8,
    title: 'MyProperty',
    path: '/profile/myProperty',
    Element: <MyProperty />,
    search: '?',
    hidden: true,
    private: false,
  }
];
