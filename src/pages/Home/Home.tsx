import "./Home.css";
import Barchart from "../../components/Barchart";
import { downloadData } from "../../betaData/downloadData";
import { teacherData } from "../../betaData/teacherData";
import TeacherFeedCard from "../../components/TeacherCardFeed/TeacherFeedCard";

const Home: React.FC = () => {
  return (
    <>
      <div className='page-container'>
        <div>
          <h1>Statistics</h1>
          <Barchart data={downloadData} />
        </div>
        <div className='flex-container'>
          {teacherData.map((teacher, index) => (
            <TeacherFeedCard
              key={index}
              subject={teacher.subject}
              topic={teacher.topic}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
