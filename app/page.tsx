import "./globals.css";
import Navbar from "./components/Navbar";
import NewsComponent from "./Utils/NewsComponent";
export default function Home() {
  return (
    <>
      <div className="container1 ">
        <div className="container2 ">
          <Navbar />

          <div className="mt-[100px]">
            
          <NewsComponent/>
          </div>
        </div>
      </div>
    </>
  );
}
