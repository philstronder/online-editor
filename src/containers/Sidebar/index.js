import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import axios from 'axios'
import css from './Sidebar.module.css'
import {setSelectedFile, loadFilesSaga} from '../../redux/ducks/file'
import {useDispatch, useSelector} from 'react-redux'
// import { loadFiles } from '../../services/fileapi';

const useStyles = makeStyles({
  root: {
    height: 110,
    flexGrow: 1,
    maxWidth: 400,
  },
});

export default function Sidebar() {

  const [tree, setTree] = useState()
  const dispatch = useDispatch()
  const files = useSelector(state => state.files)
  
  useEffect(() => {
    dispatch(loadFilesSaga())
  }, [])

  const classes = useStyles()

  const handleClick = (e, nodes) => {
    if(!nodes.isDirectory)
      dispatch(setSelectedFile(nodes))
  }

  useEffect(() => {    
    if(files && files.length) {
      setTree(files)
    }
  }, [files])

  const refsCollection = {}

  const renderTree = (nodes) => {
      return(
        <div className={css.SidebarContainer} key={nodes.id}>
          <div className={css.Sidebar}>
            <TreeItem ref={(instance) => {refsCollection[nodes.name] = instance}}
              key={nodes.id} 
              nodeId={nodes.id.toString()} 
              label={nodes.name} 
              onClick={e => handleClick(e, nodes)}>
                {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
            </TreeItem>
          </div>
        </div> 
      )
  };

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpanded={['root']}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      { tree && renderTree(tree[0]) }
    </TreeView>
  );
}