import { Swiper } from "swiper/react";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "./swiper.css";
import { SwiperProps } from "../../Types/userTypes";
register();

const SwiperWrapper = ({ children, navigation, pagination, loop, autoplay }: SwiperProps) => {
    return (
        <Swiper 
            className="swiperWrapper"
            navigation={navigation}
            pagination={pagination}
            loop={loop}
            autoplay={autoplay}
        >
            {children}
        </Swiper>
    )
}

export default SwiperWrapper