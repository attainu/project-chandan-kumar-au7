import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { loanAmountAndTenor } from "../../redux/actions/getLoanAction";

function EmiCalculator() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [EMIamount, setEMIamount] = useState("0");

  const [LoanAmount, setLoanAmount] = useState("0");
  const [Tenor, setTenor] = useState("0");

  const [AllfieldError, setAllfieldError] = useState("");

  const [LoanAmountError, setLoanAmountError] = useState("");
  const [TenorError, setTenorError] = useState("");
  const [InterestRateError, setInterestRateError] = useState("");

  const LoanA = Number(LoanAmount);
  const Ten = Number(Tenor);
  // ========== calculator =========== //
  const calculateEmi = (e) => {
    e.preventDefault();

    // console.log(LoanAmount, Tenor, InterestRate);

    if (!LoanA || !Ten) {
      setAllfieldError("provide all fields");
    } else if (LoanA < 1000) {
      setLoanAmountError("Loan Amount Should Be Minumum 1000");
      setEMIamount("");
    } else if (Ten > 36 || Ten < 12) {
      setTenorError("Loan Period Must Be Within 1 to 3 year in * MONTHS ONLY");
      setEMIamount("");
    } else {
      const intr = 8 / 1200;
      setEMIamount(
        Math.floor((LoanA * intr) / (1 - Math.pow(1 / (1 + intr), Ten)))
      );
    }
  };

  //  ====================== apply now ==============//

  const ApplyNow = () => {
    dispatch(loanAmountAndTenor({ LoanA, Ten }));
    history.push("/getloan");
  };

  return (
    <>
      <div className='main-header content '>
        <div className='container-fluid'>
          <div className='row'>
            {/* ================ starts of CALCULATOR =============================================================================== */}
            <div className='col-lg-12 col-12'>
              {/* <!-- small card --> */}
              <div
                className='small-box '
                style={{ minHeight: "80vh", background: "#f7eccd" }}>
                <div className='inner'>
                  <div className='v1_leftsidebox PLShortcal'>
                    <a
                      href='#!'
                      className='small-box-header'
                      style={{ padding: "20px" }}>
                      <div className='v1_boxHeading'>
                        <h2>Check Your Personal Loan EMI</h2>
                      </div>
                    </a>
                    <div className='v1_boxinsidepadd'>
                      <div className='v1_SliderculatorBox'>
                        <form>
                          <div className='generatopt'>
                            <div className='row'>
                              <div className='col-sm-4'>
                                <p className='fildtitle'>loan amount</p>

                                <div className='formfldmain'>
                                  <input
                                    autoComplete='off'
                                    className='infild plshortinvestAmnt'
                                    placeholder='e.g. 5,00,000'
                                    style={{
                                      padding: "15px 0 15px 30px",
                                      borderRadius: "20px",
                                      fontSize: "24px",
                                      outline: "none",
                                      width: "200px",
                                    }}
                                    type='number'
                                    onChange={(e) => {
                                      setLoanAmount(e.target.value);
                                      setAllfieldError("");
                                      setLoanAmountError("");
                                    }}
                                  />
                                  <label className='rightsdlbl'>Rs.</label>
                                  <p className='v1_errormsg'>
                                    {LoanAmountError}
                                  </p>
                                </div>
                              </div>

                              <div className='col-sm-4'>
                                <p className='fildtitle'>tenor</p>

                                <div className='formfldmain'>
                                  <input
                                    autoComplete='off'
                                    className='infild '
                                    id='plshorttenor'
                                    placeholder='e.g. 24'
                                    style={{
                                      padding: "15px 0 15px 30px",
                                      borderRadius: "20px",
                                      fontSize: "24px",
                                      outline: "none",
                                      width: "200px",
                                    }}
                                    type='number'
                                    onChange={(e) => {
                                      setTenor(e.target.value);
                                      setAllfieldError("");
                                      setTenorError("");
                                    }}
                                  />

                                  <label className='rightsdlbl'>M.</label>
                                  <p className='v1_errormsg'>{TenorError}</p>
                                </div>
                              </div>

                              <div className='col-sm-4'>
                                <p className='fildtitle'>interest rate</p>

                                <div className='formfldmain'>
                                  <input
                                    autoComplete='off'
                                    className='infild floatnumberVD'
                                    id='interstDate'
                                    placeholder='e.g. 10'
                                    value='8'
                                    readOnly
                                    type='number'
                                    style={{
                                      padding: "15px 0 15px 30px",
                                      borderRadius: "20px",
                                      fontSize: "24px",
                                      outline: "none",
                                      width: "200px",
                                    }}
                                    onChange={(e) => {
                                      setAllfieldError("");
                                      setInterestRateError("");
                                    }}
                                  />
                                  <label className='rightsdlbl'>%</label>
                                  <p className='v1_errormsg'>
                                    {InterestRateError}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <h1 style={{ color: "red" }}>{AllfieldError}</h1>

                          <div className='exacteligifillmob plshortcal'>
                            <div className='exacteligi v1_plapplynowsec'>
                              <div className='eligirisult'>
                                <button
                                  onClick={calculateEmi}
                                  className='btn btn-primary'>
                                  CHECK_YOUR_EMI
                                </button>
                                <br />
                                <br />
                                <h4>
                                  Your EMI amount is Arround
                                  <em style={{ color: "red" }}>
                                    <u> {EMIamount} Rs. </u>
                                  </em>
                                  Per Month
                                </h4>
                                <h4>
                                  Your TOTAL PayAbleInterest Will Be
                                  <em style={{ color: "red" }}>
                                    <u> {Tenor * EMIamount - LoanAmount} RS.</u>
                                  </em>
                                </h4>
                                <h4>
                                  You Will Be Paying
                                  <em style={{ color: "red" }}>
                                    <u> {Tenor * EMIamount} RS. </u>
                                  </em>
                                  After {Tenor} Months.
                                </h4>

                                <br />
                              </div>
                            </div>
                          </div>
                        </form>
                        <button className='btn btn-success' onClick={ApplyNow}>
                          APPLY_NOW
                        </button>
                        <br />
                        <br />
                        <div
                          className='desclaimer'
                          style={{ background: "pink" }}>
                          <h5>Disclaimer :</h5>
                          The EMI calculator is an indicative tool and the
                          results may vary based on actual interest rates and
                          the period between disbursal date and the first EMI
                          date. Calculation results are approximate and for
                          information purposes only.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='icon'>
                  <i className='fas fa-calculator'></i>
                </div>

                <br />
              </div>
            </div>
          </div>
          {/* ================ end of CALCULATOR =============================================================================== */}
        </div>
      </div>
    </>
  );
}

export default EmiCalculator;
