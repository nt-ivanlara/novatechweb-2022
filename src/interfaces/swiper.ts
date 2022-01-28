export interface SwiperSettingsProps {
    slidesPerView: number;
    spaceBetween: number;
    slidesPerGroup: number;
    loop: boolean;
    loopFillGroupWithBlank: boolean;
    navigation: boolean;
    pagination: SwiperPaginationProps;
    autoplay?: SwiperAutoplayProps;
}

export interface SwiperPaginationProps {
    clickable: boolean;
}

export interface SwiperAutoplayProps {
    delay: number;
    disableOnInteraction: boolean;
}