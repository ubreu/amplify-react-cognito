import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import {BrowserRouter, Routes, Route, useParams } from 'react-router-dom'

Amplify.configure(awsExports);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Protected />}/>
        <Route path="/public/:id" element={<Public />}/>
      </Routes>
    </BrowserRouter>
  );
}

function Protected() {
  return <Authenticator>
    {({ signOut, user }) => (
      <main>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
      </main>
    )}
  </Authenticator>;
}

function Public() {
  let { id } = useParams();
  return <h1>Public Page {id}</h1>;
  return <h2>Public</h2>
}