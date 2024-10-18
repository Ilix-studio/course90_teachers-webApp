import React from "react";
import "./TeacherCard.css";
interface TeacherCardProps {
  subject: string;
  topic: string;
}
const TeacherFeedCard: React.FC<TeacherCardProps> = ({ subject, topic }) => {
  return (
    <div className='card'>
      <div className='card-header'>
        <div className='teacher-info'>
          <span className='teacher-name'>{subject}</span>
        </div>
        {/* <FaPlus className='icon-plus' /> */}
      </div>
      <div className='card-body'>
        <p>{topic}</p>
      </div>
    </div>
  );
};

export default TeacherFeedCard;
