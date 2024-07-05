import "./App.css";
import Testimonials from "./components/Testimonials";
import reviews from "./data";
function App() {
  return (
   <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
   <div className="text-center">
   {/* heading */}
   <h1 className="text-4xl font-bold">Our Testimonial</h1>

{/* underline */}
    <div className="bg-red-600 w-[4px] g-[1/5] mt-1 "></div>

    {/* testimonial content */}

    <Testimonials reviews={reviews}/>

   </div>
   
   </div>
  );
}

export default App;
