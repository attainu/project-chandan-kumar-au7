import React from "react";

function Home() {
  return (
    <>
      <div className='main-header content' style={{ minHeight: "700px" }}>
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
                  <i className='ion ion-stats-bars'></i>
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
        <a
          id='back-to-top'
          href='#!'
          className='btn btn-primary back-to-top'
          role='button'
          aria-label='Scroll to top'>
          <i className='fas fa-chevron-up'></i>
        </a>
      </div>
    </>
  );
}

export default Home;
