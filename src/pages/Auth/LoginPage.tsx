import "./AuthPageCss/LoginPage.css";

import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='form-wrapper'>
        {/* Logo Section */}
        <div>
          <img
            src='https://firebasestorage.googleapis.com/v0/b/course90-b95d3.appspot.com/o/course90xTeachers%20(2)%20(1).png?alt=media&token=edf9ee07-d541-4cf2-9f5c-6673cc2486e3'
            alt='Logo'
            className='logo'
          />
        </div>
        <div className='form-container'>
          <form className='form'>
            <div className='flex-column'>
              <label>Email </label>
            </div>
            <div className='inputForm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 64'
                width='20'
                height='20'
              >
                <rect
                  x='8'
                  y='16'
                  width='48'
                  height='32'
                  rx='4'
                  ry='4'
                  fill='#b3cde0'
                  stroke='#000'
                  stroke-width='2'
                />

                <polygon
                  points='8,16 32,36 56,16'
                  fill='#fff'
                  stroke='#000'
                  stroke-width='2'
                />

                <line
                  x1='8'
                  y1='48'
                  x2='32'
                  y2='28'
                  stroke='#000'
                  stroke-width='2'
                />
                <line
                  x1='32'
                  y1='28'
                  x2='56'
                  y2='48'
                  stroke='#000'
                  stroke-width='2'
                />
              </svg>

              <input
                placeholder='Enter your Email'
                className='input'
                type='text'
              />
            </div>
            <div className='flex-column'>
              <label>Password </label>
            </div>
            <div className='inputForm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 64 64'
                width='22'
                height='22'
              >
                <rect
                  x='16'
                  y='28'
                  width='32'
                  height='28'
                  rx='4'
                  ry='4'
                  fill='#b3cde0'
                  stroke='#000'
                  stroke-width='2'
                />

                <path
                  d='M24,28 v-10 a8,8 0 0,1 16,0 v10'
                  fill='none'
                  stroke='#000'
                  stroke-width='2'
                />

                <circle cx='32' cy='42' r='3' fill='#000' />
                <rect x='30' y='42' width='4' height='8' fill='#000' />
              </svg>

              <input
                placeholder='Enter your Password'
                className='input'
                type='password'
              />
            </div>
            <div className='flex-row'>
              <span
                className='span'
                onClick={() => navigate("/forgotPassword")}
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  cursor: "pointer",
                  fontSize: "13px",
                }}
              >
                Forgot password?
              </span>
            </div>
            <button className='button-submit'>Sign In</button>
            <p className='p'>
              Don't have an account?{" "}
              <span
                className='span'
                onClick={() => navigate("/signup")}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  color: "blue",
                }}
              >
                Sign Up
              </span>
            </p>
            <p className='p line'>Or With</p>
            <div className='flex-row'>
              <button className='btn google'>
                <svg
                  xmlSpace='preserve'
                  enableBackground='new 0 0 512 512'
                  viewBox='0 0 512 512'
                  y='0px'
                  x='0px'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  xmlns='http://www.w3.org/2000/svg'
                  id='Layer_1'
                  width={20}
                  version='1.1'
                >
                  <path
                    d='M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z'
                    style={{ fill: "#FBBB00" }}
                  />
                  <path
                    d='M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z'
                    style={{ fill: "#518EF8" }}
                  />
                  <path
                    d='M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z'
                    style={{ fill: "#28B446" }}
                  />
                  <path
                    d='M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z'
                    style={{ fill: "#F14336" }}
                  />
                </svg>
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
