import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as css_app from './css-app';

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={css_app.main_container}>
        <a href="https://vitejs.dev" target="_blank">
          <img className={css_app.img_css} src={viteLogo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img className={css_app.img_css} src={reactLogo} alt="React logo" />
        </a>
      </div>
      <h1 className={css_app.title_css}>Vite + React</h1>
      <div className={css_app.main_container}>
        <button className={css_app.button_css} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}