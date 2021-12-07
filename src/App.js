import FirstComponent from "./components/FirstComponent";
import Footer from "./components/Footer";
import SecondComponent from "./components/SecondComponent";
import ThirdCompnent from "./components/ThirdCompnent";

function App() {
  return (
    <>
      <main className="container">
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdCompnent></ThirdCompnent>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
