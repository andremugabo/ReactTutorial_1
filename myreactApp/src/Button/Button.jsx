//HOW TO STYLE REACT COMPONENT WITH CSS
//------------------------------------
//(NOT INCLUDING EXTERNAL FRAMEWORKS OR PREPROCESSORS)

//1. EXTERNAL
//2. MODULES
//3. INLINE
import styles from "./Button.module.css";
function Button() {
  return <button className={styles.button}>Click me</button>;
}
export default Button;
