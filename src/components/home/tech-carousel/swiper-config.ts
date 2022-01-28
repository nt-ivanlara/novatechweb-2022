import { SwiperSettingsProps } from "@/interfaces/swiper";

export const settings: SwiperSettingsProps = {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: false,
    navigation: false,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    }
};
