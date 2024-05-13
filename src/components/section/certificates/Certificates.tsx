"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SlideProps from "./slideProps";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper";
import "./certificates.css";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CertificatesText from "./CertificatesText";

function Certificates() {
  return (
    <div id="onas" className="pb-24 bg-[#dddddd]">
      <MaxWidthWrapper>
        <div className="title flex flex-col justify-center items-center md:py-24 py-12">
          <h2 className="">
            Nasze <span className="text-primary">certyfikaty</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-4xl">
            Nasze certyfikaty cyberbezpieczeństwa, w tym ISO 27001, OSCP, eCPPT,
            i inne, potwierdzają najwyższy standard wiedzy i umiejętności
            naszego zespołu. Są dowodem na to, że stosujemy najnowocześniejsze
            metody i narzędzia, aby zapewnić ochronę danych i infrastruktury
            naszych klientów.
          </p>
        </div>
      </MaxWidthWrapper>
      <div className="certificates">
        <MaxWidthWrapper>
          <Swiper
            className="flex justify-center items-center"
            {...SlideProps}
            modules={[EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: -150, // Odległość między slajdami
              depth: 300, // Głębia perspektywy
              modifier: 1, // Wpływ na położenie slajdu
              slideShadows: false, // Wyłącz cienie slajdów
            }}
          >
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[220px] md:h-[180px] w-[160px] h-[130px]">
                <Image
                  src="/assets/images/1.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[220px] md:h-[180px] w-[160px] h-[130px]">
                <Image
                  src="/assets/images/2.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[220px] md:h-[180px] w-[160px] h-[130px]">
                <Image
                  src="/assets/images/3.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/4.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/5.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/6.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[220px] md:h-[180px] w-[160px] h-[130px]">
                <Image
                  src="/assets/images/7.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/8.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/9.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/10.png"
                  alt="collab1"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="about__slide flex items-center justify-center align-middle  relative md:w-[200px] md:h-[200px] w-[140px] h-[140px]">
                <Image
                  src="/assets/images/11.png"
                  alt="collab11"
                  fill
                  objectFit="cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </MaxWidthWrapper>
        <div className="text pt-20 ">
          <CertificatesText />
        </div>
      </div>
    </div>
  );
}

export default Certificates;
