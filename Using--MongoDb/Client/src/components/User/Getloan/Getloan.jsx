import React from "react";
import { LoanApplyForm } from "./LoanApplyForm";
// import { Link } from "react-router-dom";

function Getloan() {
  return (
    <>
      <div className='main-header content '>
        <div className='container-fluid'>
          <div className='bd-example container-fluid'>
            <div>
              Your Loan Will Be Approved In Just <br /> 3 <br />
              Simple Step:
            </div>
            {/* ========= carousel stats =========== */}
            <div
              id='carouselExampleCaptions'
              className='carousel slide '
              data-ride='carousel'>
              <ol className='carousel-indicators'>
                <li
                  data-target='#carouselExampleCaptions'
                  data-slide-to='0'></li>
                <li
                  data-target='#carouselExampleCaptions'
                  data-slide-to='1'></li>
                <li
                  data-target='#carouselExampleCaptions'
                  data-slide-to='2'></li>
              </ol>

              {/* ========= carousel slides stats =========== */}

              <div
                className='carousel-inner'
                style={{ margin: "30px 0 30px 0" }}>
                {/* ========= carousel 1ST div stats =========== */}

                <div className='carousel-item active'>
                  <div
                    className='container-fluid'
                    style={{
                      position: "absolute",
                      margin: "10vh 0",
                    }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "30%",
                        background: "red",
                        height: "50px",
                        width: "50px",
                        margin: "auto",
                      }}>
                      <h1
                        style={{
                          textAlign: "center",
                        }}>
                        1
                      </h1>
                    </div>
                    <div>
                      Just Decide How Much Do You Want And You Will Be Good To
                      Have Loan.
                      <br />
                      Fill The Form Accordingly.
                    </div>
                  </div>

                  <img
                    src='https://cdn.pixabay.com/photo/2018/09/22/11/43/application-3695107__340.jpg'
                    className='d-block w-100'
                    style={{ opacity: 0.3, border: "1px solid black" }}
                    alt='...'
                  />
                </div>

                {/* ========= carousel 2ND div stats =========== */}

                <div className='carousel-item'>
                  <div
                    className='container-fluid'
                    style={{
                      position: "absolute",
                      margin: "10vh 0",
                    }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "30%",
                        background: "red",
                        height: "50px",
                        width: "50px",
                        margin: "auto",
                      }}>
                      <h1
                        style={{
                          textAlign: "center",
                        }}>
                        2
                      </h1>
                    </div>
                    <div>
                      Keep your documents handy to set-up your limit or reach
                      out for help to complete the process.
                    </div>
                  </div>
                  <img
                    src='https://cdn.pixabay.com/photo/2015/11/18/15/02/approved-1049259__340.png'
                    className='d-block w-100'
                    style={{ opacity: 0.3, border: "1px solid black" }}
                    alt='...'
                  />
                </div>
                {/* ========= carousel 3rd div stats =========== */}

                <div className='carousel-item'>
                  <div
                    className='container-fluid'
                    style={{
                      position: "absolute",
                      margin: "10vh 0",
                    }}>
                    <div
                      style={{
                        position: "relative",
                        borderRadius: "30%",
                        background: "red",
                        height: "50px",
                        width: "50px",
                        margin: "auto",
                      }}>
                      <h1
                        style={{
                          textAlign: "center",
                        }}>
                        3
                      </h1>
                    </div>
                    <div>
                      Finish your auto-repayment & withdraw upto The Limit
                      <br />
                      directly to your bank account!.
                    </div>
                  </div>
                  <img
                    src='https://cdn.pixabay.com/photo/2015/10/31/08/50/coins-1015125__340.jpg'
                    className='d-block w-100'
                    style={{
                      opacity: 0.3,
                      border: "1px solid black",
                    }}
                    alt='...'
                  />
                </div>
              </div>

              {/* ========= carousel All div End =========== */}

              <a
                className='carousel-control-prev'
                href='#carouselExampleCaptions'
                role='button'
                data-slide='prev'>
                <span
                  className='carousel-control-prev-icon'
                  aria-hidden='true'></span>
                <span className='sr-only'>Previous</span>
              </a>
              <a
                className='carousel-control-next'
                href='#carouselExampleCaptions'
                role='button'
                data-slide='next'>
                <span
                  className='carousel-control-next-icon'
                  aria-hidden='true'></span>
                <span className='sr-only'>Next</span>
              </a>
            </div>
            {/*  =========== The get loan div starts from here ==========  */}
          </div>
          <LoanApplyForm />
        </div>
      </div>
    </>
  );
}

export default Getloan;
