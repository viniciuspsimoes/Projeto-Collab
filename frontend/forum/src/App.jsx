import React from 'react';
import './index.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import PostCreator from './components/PostCreator';
import Post from './components/Main.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <SidebarLeft />
        <main className="content">
          <PostCreator />
          <Post />
        </main>
        <SidebarRight />
      </div>
    </div>
  );
}

export default App;
