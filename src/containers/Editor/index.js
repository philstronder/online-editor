import React, {useEffect, useState} from 'react'
import axios from 'axios'
import css from './Editor.module.css'
import {useSelector, useDispatch} from 'react-redux'
import { select } from 'redux-saga/effects'
import {loadFileSaga} from '../../redux/ducks/file'

export default function Editor() {
  const [fileContent, setFileContent] = useState()

  const selectedFileMenu = useSelector(state => state.selectedFileMenu)
  const selectedFile = useSelector(state => state.selectedFile)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!!selectedFileMenu) {
      dispatch(loadFileSaga(selectedFileMenu.id))
    }
  }, [selectedFileMenu])

  
  useEffect(() => {
    if(selectedFile)
      setFileContent(selectedFile.content)
      
  }, [selectedFile])

  const handleKeyDown = (e) => {
    if(e.keyCode == 9) {
      e.preventDefault()
      document.execCommand('insertHTML', false, '&#009')
    }

    e.target.classList.add(css.HandleTab)
  }

  return (
    <div key={selectedFileMenu ? selectedFileMenu.id : ''}
      className={css.Editor} 
      contentEditable 
      onKeyDown={handleKeyDown}
      suppressContentEditableWarning={true}>
        {fileContent}
    </div>
  )
}
