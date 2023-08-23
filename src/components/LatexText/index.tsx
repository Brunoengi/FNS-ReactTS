import styles from './LatexText.module.scss'
var Latex = require('react-latex');

export default function LatexText() {

  const fraction = `$$\\frac{1}{2}$$`
  const pythagorean = `$$a^2 + b^2 = c^2$$`

  return (
    <div className={styles.LatexContainer}>
    <Latex>{pythagorean}</Latex>
    </div>
  )
}