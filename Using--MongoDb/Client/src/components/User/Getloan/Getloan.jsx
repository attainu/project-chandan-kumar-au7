import React from "react";
// import { Link } from "react-router-dom";

function Getloan() {
  return (
    <>
      <div class='bd-example'>
        <div
          id='carouselExampleCaptions'
          class='carousel slide'
          data-ride='carousel'>
          <ol class='carousel-indicators'>
            <li
              data-target='#carouselExampleCaptions'
              data-slide-to='0'
              class='active'></li>
            <li data-target='#carouselExampleCaptions' data-slide-to='1'></li>
            <li data-target='#carouselExampleCaptions' data-slide-to='2'></li>
          </ol>
          <div class='carousel-inner'>
            <div class='carousel-item active'>
              <img
                src='https://cdn.pixabay.com/photo/2018/09/22/11/43/application-3695107__340.jpg'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                src='https://cdn.pixabay.com/photo/2015/11/18/15/02/approved-1049259__340.png'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div class='carousel-item'>
              <img
                src='https://cdn.pixabay.com/photo/2015/10/31/08/50/coins-1015125__340.jpg'
                class='d-block w-100'
                alt='...'
              />
              <div class='carousel-caption d-none d-md-block'>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            class='carousel-control-prev'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='prev'>
            <span class='carousel-control-prev-icon' aria-hidden='true'></span>
            <span class='sr-only'>Previous</span>
          </a>
          <a
            class='carousel-control-next'
            href='#carouselExampleCaptions'
            role='button'
            data-slide='next'>
            <span class='carousel-control-next-icon' aria-hidden='true'></span>
            <span class='sr-only'>Next</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Getloan;
