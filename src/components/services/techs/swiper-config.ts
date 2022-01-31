import { SwiperSettingsProps } from "@/interfaces/swiper";

export const settings: SwiperSettingsProps = {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
};
