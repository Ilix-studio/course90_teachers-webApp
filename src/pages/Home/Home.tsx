import "./Home.css";
import Barchart from "../../components/Barchart";
import { downloadData } from "../../betaData/downloadData";

const Home = () => {
  return (
    <>
      <div className='page-container'>
        <div>
          <h1>Statistics</h1>
          <Barchart data={downloadData} />
        </div>
      </div>
    </>
  );
};

export default Home;
