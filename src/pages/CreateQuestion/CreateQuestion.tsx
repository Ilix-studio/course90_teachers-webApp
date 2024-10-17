import React, { useState } from "react";
import "./createQ-styles.css";
const CreateQuestion: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("general");

  // Function to switch tabs
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className='page-container'>
      {/* Tabs */}
      <div className='tabs'>
        <button
          className={`tab-button ${activeTab === "general" ? "active" : ""}`}
          onClick={() => handleTabClick("general")}
        >
          General
        </button>
        <button
          className={`tab-button ${activeTab === "mockTest" ? "active" : ""}`}
          onClick={() => handleTabClick("mockTest")}
        >
          Mock Test
        </button>
      </div>

      {/* Tab Content */}
      <div className='tab-content'>
        {activeTab === "general" && (
          <form className='general-form'>
            <div className='form-group'>
              <label htmlFor='subject'>Select Subject</label>
              <select id='subject'>
                <option value='math'>Math</option>
                <option value='science'>Science</option>
                <option value='science'>English</option>
                <option value='science'>Social Science</option>
                {/* Add more subjects here */}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='language'>Select Language</label>
              <select id='language'>
                <option value='english'>English</option>
                <option value='hindi'>Assamese</option>
                {/* Add more languages here */}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='topic'>Insert Topic</label>
              <input type='text' id='topic' placeholder='Enter topic' />
            </div>

            <button type='submit' className='save-button'>
              Save
            </button>
          </form>
        )}

        {activeTab === "mockTest" && (
          <form className='mock-test-form'>
            <div className='form-group'>
              <label htmlFor='subject'>Select Subject</label>
              <select id='subject'>
                <option value='math'>Math</option>
                <option value='science'>Science</option>
                <option value='science'>English</option>
                <option value='science'>Social Science</option>
                {/* Add more subjects here */}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='language'>Select Language</label>
              <select id='language'>
                <option value='english'>English</option>
                <option value='hindi'>Assamese</option>
                {/* Add more languages here */}
              </select>
            </div>

            <div className='form-group'>
              <label htmlFor='topic'>Insert Topic</label>
              <input type='text' id='topic' placeholder='Enter topic' />
            </div>

            <div className='form-group'>
              <label htmlFor='totalMarks'>Add Total Marks</label>
              <input
                type='number'
                id='totalMarks'
                placeholder='Enter total marks'
              />
            </div>

            <div className='form-group'>
              <label htmlFor='passMarks'>Pass Marks</label>
              <input
                type='number'
                id='passMarks'
                placeholder='Enter pass marks'
              />
            </div>

            <div className='cl-toggle-switch'>
              <label className='cl-switch'>
                <input type='checkbox' />
                <span></span>
              </label>
              <label htmlFor='timer'>Add Timer</label>
            </div>
            <br />
            <br />
            <button type='submit' className='save-button'>
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CreateQuestion;
