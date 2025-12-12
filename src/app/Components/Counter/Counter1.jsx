"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";

const Counter1 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div className="counter-section fix">
      <div className="counter-container-wrapper style1">
        <div className="container">
          <div
            className="counter-wrapper style1 section-padding"
            data-background="/assets/images/shape/counterShape1_1.png"
          >
            <div className="shape"></div>
            <div className="container">
              <div className="row gy-5">
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <div className="counter">
                      <span className="counter-number">150</span>{" "}
                      <span className="plus">+</span>
                    </div>
                    <p className="text">Project Selesai dengan Sukses</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <div className="counter">
                      <span className="counter-number">98</span>{" "}
                      <span className="plus">%</span>
                    </div>
                    <p className="text">Tingkat Kepuasan Klien</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <div className="counter">
                      <span className="counter-number">5</span>{" "}
                      <span className="plus">+</span>
                    </div>
                    <p className="text">Tahun Pengalaman di Industri</p>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6 d-flex justify-content-center">
                  <div
                    className="counter-box style1 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <div className="counter">
                      <span className="counter-number">24</span>{" "}
                      <span className="plus">/7</span>
                    </div>
                    <p className="text">Technical Support & Maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter1;
