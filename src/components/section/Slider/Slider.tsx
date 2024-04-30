"use client";
import Link from "next/link";
import { home1SliderProps } from "./sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import "./slider.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function Slider() {
  return (
    <div>
      <div className="">
        {/* Section Hero Main Slider */}
        <Swiper
          {...home1SliderProps}
          className="section hero-main-slider"
          effect="slide"
        >
          <SwiperSlide className="swiper-slide flex" data-color="dark">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/gradient.png)",
              }}
            />
            {/* slide titles */}
            <MaxWidthWrapper>
              <div className="slide-titles">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* title */}
                    <div className="titles dark">
                      <div className="label scrolla-element-anim-1">
                        Cybers One
                      </div>
                      <div className="title">
                        <h1
                          className="title-inner text-7xl splitting-text-anim-2"
                          data-splitting=""
                        >
                          JEDEN <br />
                          ABONAMENT
                        </h1>
                      </div>
                      <div className="subtitle scrolla-element-anim-1">
                        <p className=" max-w-prose">
                          na rozwiązanie wszytskich Twoich problemów z
                          cyberbezpieczeństwem, bezpieczeństwem informacji,
                          ochroną danych, monitoringiem, zaawansowaną analizą, i
                          odmiejscowieniem krytycznych kopii zapasowych,
                          odpornych nawet na ransomware.
                        </p>
                      </div>
                    </div>
                    <div className="more-bts">
                      <Link legacyBehavior href="/work-single">
                        <a
                          data-splitting=""
                          className="callbtn btn more-btn scrolla-element-anim-1"
                        >
                          Oblicz cenę
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide flex" data-color="white">
            {/* image */}
            <div
              className="slide"
              style={{
                backgroundImage: "url(assets/images/gradient1.png)",
              }}
            />
            {/* slide titles */}
            <MaxWidthWrapper>
              <div className="slide-titles">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* title */}
                    <div className="titles">
                      <div className="label scrolla-element-anim-1">
                        Cybers One
                      </div>
                      <div className="title">
                        <h1
                          className="title-inner text-7xl splitting-text-anim-2"
                          data-splitting=""
                        >
                          Wszystkie certyfikaty
                        </h1>
                      </div>
                      <div className="subtitle scrolla-element-anim-1">
                        istotne w prowadzeniu Biznesu w kontekście
                        cyberbezpieczeństwa, ochrony informacji i innych
                        obszarów związanych z bezpieczeństwem w jednym miejscu.
                        <br></br>
                        Gotowe, wraz z zepsołem ekspertów, do natychmiastowego
                        włączenia Twojego Zespołu
                      </div>
                    </div>
                    <div className="more-bts">
                      <Link legacyBehavior href="/work-single">
                        <a
                          data-splitting=""
                          className="callbtn text-white btn more-btn scrolla-element-anim-1"
                        >
                          Oblicz cenę
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </SwiperSlide>

          {/* pagination */}
          <div
            className="swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated"
            data-animate="active"
          />
          {/* navigation */}
          <div className="swiper-buttons">
            <div className="swiper-button-prev" />
            <div className="swiper-button-next" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
