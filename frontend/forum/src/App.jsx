import React from 'react';
import './index.css';
import Header from './components/Header';
import SidebarLeft from './components/SidebarLeft';
import SidebarRight from './components/SidebarRight';
import PostCreator from './components/PostCreator';
import Post from './components/Main.jsx';
import BrowseTools from './components/BrowseTools.jsx';
import Filter from './components/Filter.jsx';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main-layout">
        <div className='left-cards'>
          <SidebarLeft />
          <BrowseTools />
        </div>
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
