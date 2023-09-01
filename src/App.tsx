
import { useEffect } from 'react';
import { useImmer } from 'use-immer';
// import { useSelector } from 'react-redux'
import { getSizeCss } from './utils';
import classname from 'classnames';
import style from './App.module.scss';

import {Decorate} from './components/decorate/index.tsx'; 


function App() {
  // 使用数据
  // const { count } = useSelector(state => state.counter)
  const [size, setSize] = useImmer({
    w:document.documentElement.clientWidth, h:document.documentElement.clientHeight
  })
  useEffect(() => {
    const resize = () => {
      setSize((draft) => {
        draft.w = document.documentElement.clientWidth
        draft.h = document.documentElement.clientHeight
      })
    }
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [setSize])

  const sizeCss = getSizeCss(size)

  return (
    <div className={style.App} style={sizeCss}>
      <div className={classname({[style.rect]:true,[style.drop]: false})}>
        <Decorate/>


      </div>
    </div>
  )
}

export default App
