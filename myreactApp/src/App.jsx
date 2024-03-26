import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx";
import Card from "./Card.jsx";
import Button from "./Button/Button.jsx";
import ButtonInlineStyle from "./ButtonInlineStyle.jsx";
import Student from "./Student.jsx";
function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Button />
      <ButtonInlineStyle />
      <Student name="SpongeBob" age={30} isStudent={true} />
      <Student name="Patrick" age={42} isStudent={false} />
      <Student name="Squidward" age={52} isStudent={false} />
      <Student name="Sandy" age={27} isStudent={true} />
      <Footer />
    </>
  );
}

export default App;
