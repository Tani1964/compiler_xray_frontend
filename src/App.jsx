import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { DataContextProvider } from "./components/contexts/DataContext";

const App = () => {
  return (
    <DataContextProvider>
      <div className="h-screen flex flex-col justify-between ">
        <Header />
        <Body />
        <Footer />
      </div>
    </DataContextProvider>
  );
};

export default App;
