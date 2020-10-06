import React from "react";
import EmiCalculator from "../components/Calculator/EmiCalculator";

function Home() {
  //  ====================== apply now ==============//

  return (
    <>
      <div className='main-header content ' style={{ minHeight: "100vh" }}>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-6'>
              {/* <!-- small card --> */}
              <div className='small-box bg-info'>
                <div className='inner'>
                  <h3>150</h3>

                  <p>New Orders</p>
                </div>
                <div className='icon'>
                  <i className='fas fa-shopping-cart'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className='col-lg-3 col-6'>
              {/* <!-- small card --> */}
              <div className='small-box bg-success'>
                <div className='inner'>
                  <h3>
                    53<sup style={{ fontSize: "20px" }}>%</sup>
                  </h3>

                  <p>Bounce Rate</p>
                </div>
                <div className='icon'>
                  <i className='fab fa-angellist'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className='col-lg-3 col-6'>
              {/* <!-- small card --> */}
              <div className='small-box bg-warning'>
                <div className='inner'>
                  <h3>44</h3>

                  <p>User Registrations</p>
                </div>
                <div className='icon'>
                  <i className='fas fa-user-plus'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className='col-lg-3 col-6'>
              {/* <!-- small card --> */}
              <div className='small-box bg-danger'>
                <div className='inner'>
                  <h3>65</h3>

                  <p>Unique Visitors</p>
                </div>
                <div className='icon'>
                  <i className='fas fa-chart-pie'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
          </div>
        </div>
        <div className='container-fluid'>
          <div className='small-box'>
            <div className='inner'>
              <h1> Instant Personal Loan for Any Reason</h1>A variety of
              purposes for availing an instant personal loan Need a instant
              personal loan to plan your wedding or a family vacation? Are you
              falling short of cash to make your credit card payment or your
              rental deposit? Or it could be an emergency like a medical
              situation or needing an urgent advance salary as your regular
              salary has not yet been credited? While income can be delayed, our
              monthly expenses cannot wait for them. Whatever be the reason,
              LenDenClub understands your requirements and offers the right
              solution through our loans.
            </div>
          </div>
        </div>
        <br />
        <div className='container-fluid'>
          <div className='small-box'>
            <div className='inner'>
              <h1> Why Take an Instant And Easy Loan from Us?</h1>
              Is your credit history a problem? Not for LenDenClub! As a Peer to
              Peer (P2P) lending platform, LenDenClub is equipped to provide
              personal loans with quick processing and at flexible interest
              rates. As a customer, you can get an instant personal loan for any
              reason at an interest rate that is calculated according to a lot
              of parameters like your income, number of dependents, your credit
              worthiness etc. The entire loan disbursement is smooth and
              transparent. Being a technology platform, you are just a few
              clicks away from availing a personal loan from LenDenClub. Few
              ways LenDenClub’s Instant Personal loan are better for you:
            </div>
          </div>
        </div>

        {/*  */}
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              {/* <!-- small card --> */}
              <div className='small-box bg-info'>
                <div className='inner'>
                  <h1>Easy Processing</h1>
                  We offer easy loan processing through a complete online
                  technology-based process. What’s more, you don’t need you to
                  submit any supporting documentation in physical form. All the
                  loan documents are also collected online. Just a few online
                  clicks and you are ready to go!
                </div>
                <div className='icon'>
                  <i className='fas fa-shopping-cart'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className='col-lg-4 col-12'>
              {/* <!-- small card --> */}
              <div className='small-box bg-success'>
                <div className='inner'>
                  <h1> Flexible Interest Rates</h1>
                  Most personal loans attract high-interest rates. Our internal
                  credit rating system calculates your interest rate according
                  to the your credit worthiness. Got a higher LenDenClub score?
                  You are now eligible for a low-interest personal loan!
                  Interest rate usually varies between 6.5% to 20.95%.
                </div>
                <div className='icon'>
                  <i className='fab fa-angellist'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
            {/* <!-- ./col --> */}
            <div className='col-lg-4 col-12'>
              {/* <!-- small card --> */}
              <div className='small-box bg-warning'>
                <div className='inner'>
                  <h1>Nominal Fees</h1>
                  Just a nominal registration fee of Rs. 750/- on our part and
                  we are good to disburse the personal loan. Apart from the
                  registration fee, a processing fee is charged which will be
                  deducted from your loan amount before disbursal. All charges
                  are presented beforehand, there are no hidden charges.
                </div>
                <div className='icon'>
                  <i className='fas fa-user-plus'></i>
                </div>
                <a href='#!' className='small-box-footer'>
                  More info <i className='fas fa-arrow-circle-right'></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ end of CALCULATOR =============================================================================== */}
      <EmiCalculator />
      {/* ================ end of CALCULATOR =============================================================================== */}
    </>
  );
}

export default Home;
