import React from 'react';
import Sidebar from './containers/Sidebar'
import Editor from './containers/Editor'
import Layout from './components/Layout'
import css from './App.module.css'
import Buttons from './components/Buttons'

function App() {
  return (
    <div className='App'>
      <Layout>
        <div data-cy='sidebar-container' className={css.SidebarContainer}>
          <Sidebar />
        </div>
        <div data-cy='editor-container' className={css.EditorContainer}>
          <Buttons />
          <Editor />
        </div>
      </Layout>
    </div>
  );
}

export default App;
