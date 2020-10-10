import React from "react";
import { Link } from "react-router-dom";
import { LoanApplyForm } from "../components/User/Getloan/LoanApplyForm";
import "../Style/investStyle.css";

export const Investment = () => {
  return (
    <>
      <div className='main-header content '>
        <div className='container-fluid'>
          <div className='bd-example container-fluid'>
            <h1 style={{ marginBottom: "50", marginLeft: "-180" }}>
              Investing has never been this easy!!
            </h1>
            <div
              className='jumbotron '
              style={{
                backgroundColor: "lightskyblue",
                color: "white",
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
              }}>
              <h1 className='display-4'>15% ROI</h1>
              <p className='lead'>
                Sustained high returns on investment make P2P lending a
                sought-after investment option for fixed income investors.
                Across the world, it is used as a diversification tool by HNI’s
                and institutions. Learn more about it from our team.
              </p>
              <hr className='my-4' />
              <p>
                Cash flow is tied to maturity and starts immediately after the
                investment.
              </p>

              <Link
                className='btn btn-primary btn-lg'
                href='#investFormred'
                role='button'>
                Invest
              </Link>
            </div>
            <div className='card bg-dark text-white'>
              <img
                className='card-img'
                src='https://centricdigital.com/wp-content/uploads/2016/10/Fintech-Investments-in-Traditional-Banking-Infographic.png'
                alt='CardImage'
              />
            </div>
            <div className='card-group '>
              <div className='card' style={{ margin: "5px" }}>
                <img
                  className='card-img-top'
                  src='https://cdn.dribbble.com/users/189510/screenshots/7024419/media/dde2a1c831b5b1f6d4ebdf69d5cfddf1.png'
                  alt='CardImageCap'
                  style={{ height: "350px" }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>Huge Returns</h5>
                  <p className='card-text'>
                    Solid Returns Sustained high returns on investment make P2P
                    lending a sought-after investment option for fixed income
                    investors. Across the world, it is used as a diversification
                    tool by HNI’s and institutions. Learn more about it from our
                    team.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className='card' style={{ margin: "5px" }}>
                <img
                  className='card-img-top'
                  src='https://storage.googleapis.com/cdn.makiplace.com/2018/02/8b73b0dc-makiplace-home-invest-logo-tamplate-5376-1518695121-800x420.jpg'
                  alt='CardImageCap'
                  style={{ height: "350px" }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>Monthly Cashflow</h5>
                  <p className='card-text'>
                    P2P lending is the only high return instrument to fetch
                    monthly cash flows with interest payments. Unlike other/
                    traditional investing instruments, cash flow is not tied to
                    maturity and starts immediately after the investment.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
              <div className='card'>
                <img
                  className='card-img-top'
                  src='https://cdn.dribbble.com/users/1550606/screenshots/4932327/34.png'
                  alt='CardImageCap'
                  style={{ height: "300px" }}
                />
                <div className='card-body'>
                  <h5 className='card-title'>Solid investment</h5>
                  <p className='card-text'>
                    Traditional instruments such as equity, forex, commodity
                    etc. have high volatility inherent to them, resulting in
                    notional or actual losses. P2P lending is unique in that
                    way, which offers zero volatility with expected returns.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
              </div>
            </div>
            {/* ===================={{{{{{{{{{{ Investement Form }}}}}}}}}}}===================== */}
            <LoanApplyForm />
          </div>
        </div>
      </div>
    </>
  );
};
