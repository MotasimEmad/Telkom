import logo from '../loading.jpg';
import { TailSpin } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className="w-screen h-screen bg-[#1a75bc] flex flex-col items-center justify-center">
      <img className="h-24 mb-4" src={logo} alt="Logo" />
      <TailSpin
        height="50"
        width="50"
        color="white"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loading;
