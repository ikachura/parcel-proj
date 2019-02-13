import './styles.css'
import styles from './styles-2.scss'

export const updateUI = () => {
  console.log('---', styles)

  const elem = document.querySelector('.message')
  elem.innerHTML = 'Hello World!'
  elem.classList.add('test')
  elem.classList.add(styles['test-2'])
}
