import { TabCard } from "./TabCard";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { useContext } from "react";
import { ModulesContext } from "../contexts/ModulesContext";

export function Slide() {
  const { modules } = useContext(ModulesContext);
  return (
    <Swiper
      spaceBetween={16}
      freeMode={true}
      pagination={{
        dynamicBullets: true,
      }}
      breakpoints={{
        350: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 3,
        },
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      {modules?.map(content => {
        return (
          <SwiperSlide className="mb-9" key={content.id}>
            <TabCard content={content} />
          </SwiperSlide>
        )
      }
      )}
    </Swiper>
  )
}