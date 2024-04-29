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
                backgroundImage: "url(assets/images/started-n26-1920x1080.jpg)",
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
                        <span
                          className="title-inner splitting-text-anim-2"
                          data-splitting=""
                        >
                          Jeden <br />
                          abonament
                        </span>
                      </div>
                      <div className="subtitle scrolla-element-anim-1">
                        na rozwiązanie wszytskich Twoich problemów z
                        cyberbezpieczeństwem, bezpieczeństwem informacji,
                        ochroną danych, monitoringiem, zaawansowaną analizą, i
                        odmiejscowieniem krytycznych kopii zapasowych, odpornych
                        nawet na raMsonWare,
                      </div>
                    </div>
                    <div className="more-bts">
                      <Link legacyBehavior href="/work-single">
                        <a
                          data-splitting=""
                          className="btn more-btn scrolla-element-anim-1"
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
                backgroundImage: "url(assets/images/started-n15-1920x1080.jpg)",
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
                        <span
                          className="title-inner splitting-text-anim-2"
                          data-splitting=""
                        >
                          Wszystkie certyfikaty 
                        </span>
                      </div>
                      <div className="subtitle scrolla-element-anim-1">
                        istotne w prowadzeniu Biznesu w kontekście
                        cyberbezpieczeństwa, ochrony informacji i innych
                        obszarów związanych z bezpieczeństwem w jednym miejscu.
                        Gotowe, wraz z zepsołem ekspertów, do natychmiastowego
                        włączenia Twojego Zespołu
                      </div>
                    </div>
                    <div className="more-bts">
                      <Link legacyBehavior href="/work-single">
                        <a
                          data-splitting=""
                          className="btn more-btn scrolla-element-anim-1"
                        >
                          see details
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
                backgroundImage:
                  "url(assets/images/started-n2_4-1920x1080.jpg)",
              }}
            />
            {/* slide titles */}
            <MaxWidthWrapper>
              <div className="slide-titles">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* title */}
                    <div className="titles">
                      <div className="label scrolla-element-anim-1">art</div>
                      <div className="title">
                        <span
                          className="title-inner splitting-text-anim-2"
                          data-splitting=""
                        >
                          The Dance
                        </span>
                      </div>
                      <div className="subtitle scrolla-element-anim-1">
                        Creativity is to discover a question that has never been
                        asked. If one brings up an idiosyncratic question, the
                        answer he gives will necessarily be unique as well.
                      </div>
                    </div>
                    <div className="more-bts">
                      <Link legacyBehavior href="/work-single">
                        <a
                          data-splitting=""
                          className="btn more-btn scrolla-element-anim-1"
                        >
                          see details
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
                backgroundImage:
                  "url(assets/images/started-n14_1-1000x1080.jpg)",
              }}
            />
            {/* slide titles */}
            <MaxWidthWrapper>
              <div className="slide-titles">
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    {/* title */}
                    <div className="titles">
                      <div className="label scrolla-element-anim-1">art</div>
                      <div className="title">
                        <span
                          className="title-inner splitting-text-anim-2"
                          data-splitting=""
                        >
                          Negative Space
                        </span>
                      </div>
                      <div className="subtitle scrolla-element-anim-1">
                        Creativity is to discover a question that has never been
                        asked. If one brings up an idiosyncratic question, the
                        answer he gives will necessarily be unique as well.
                      </div>
                    </div>
                    <div className="more-bts">
                      <Link legacyBehavior href="/work-single">
                        <a
                          data-splitting=""
                          className="btn more-btn scrolla-element-anim-1"
                        >
                          see details
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
