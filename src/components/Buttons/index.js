import React, {useEffect, useRef} from 'react'
import css from './Buttons.module.css'
import {useSelector, useDispatch} from 'react-redux'
import {saveFileSaga, deleteFileSaga, loadFilesSaga} from '../../redux/ducks/file'

export default function Buttons() {

  const selectedFile = useSelector(state => state.selectedFile)
  const dispatch = useDispatch()

  const buttonsContainerRef = useRef()

  useEffect(() => {
    if(!!selectedFile)
      buttonsContainerRef.current.style = 'display: inline-block'

  }, [selectedFile])

  const handleSave = () => {
    dispatch(saveFileSaga(selectedFile))
    dispatch(loadFilesSaga())
    alert(`File ${selectedFile.name} saved!`)
  }
  
  const handleDelete = () => {
    dispatch(deleteFileSaga(selectedFile))
    dispatch(loadFilesSaga())
    alert(`File ${selectedFile.name} deleted!`)
  }

  return (
    <div className={css.Buttons} ref={buttonsContainerRef}>
      <button onClick={handleSave}>SAVE</button>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  )
}
