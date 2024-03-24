//HOW TO STYLE REACT COMPONENT WITH CSS
//------------------------------------
//(NOT INCLUDING EXTERNAL FRAMEWORKS OR PREPROCESSORS)

//1. EXTERNAL
//2. MODULES
//3. INLINE
function ButtonInlineStyle() {
  const styles = {
    backgroundColor: "hsl(200,100%,50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };
  return <button style={styles}>Click me</button>;
}
export default ButtonInlineStyle;
