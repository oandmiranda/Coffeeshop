
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from "swiper/types";

export interface SwiperProps {
    className?: string
    children: React.ReactNode
    navigation?: NavigationOptions | boolean
    pagination?: PaginationOptions
    loop?: boolean
    modules?: SwiperModule[] 
    autoplay?: boolean | AutoplayOptions
}

export interface ImageProps {
    backgroundImage: any
}

export interface ButtonProps {
    background_Button?: string
}

export interface StyleProps {
    reverse: boolean
}

export interface ContentProps extends StyleProps {
    title: string
    children: string 
    textButton: string
    backgroundImage: ImageProps
    background_Button: string 
}
