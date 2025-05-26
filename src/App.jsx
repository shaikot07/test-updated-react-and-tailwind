import "./App.css";
import NavBar from "./component/NavBar";
import bannerImage from "../public/img.jpg"; // Adjust the path as necessary
function App() {
  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      {/* banner section  */}
     <div
  className="relative bg-cover bg-center h-[400px] flex flex-col justify-center items-center text-white"
  style={{
    backgroundImage: `url(${bannerImage})`,
  }}
>
  {/* Black overlay */}
  
  <div class="absolute inset-0 bg-black opacity-50"></div>

  {/* Text content */}
  <div className="relative z-10 text-center px-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
    <p className="text-lg">Explore our services and offerings.</p>
  </div>
</div>
    </>
  );
}

export default App;
