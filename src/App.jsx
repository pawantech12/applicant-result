import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApplicantResult from "./pages/applicantResult";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ApplicantResult />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

{
  /* <div className='absolute w-[905px] h-[905px] -mt-[500px] ml-[1100px] bg-[rgba(151,151,151,0.7)] rounded-full z-10 '>

<Spline className='items-end w-20 h-20 -ml-[30%] mt-[30%]' scene="https://prod.spline.design/9KpvIenVCsNv9ycN/scene.splinecode" />
</div> */
}
