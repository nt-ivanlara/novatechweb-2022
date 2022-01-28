import { SwiperSettingsProps } from "@/interfaces/swiper";

export const settings: SwiperSettingsProps = {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: false,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 1000000,
        disableOnInteraction: false,
    },
};
