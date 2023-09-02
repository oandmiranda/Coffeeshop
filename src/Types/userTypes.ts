
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
    background_Button: string
    children: React.ReactNode
}

export interface StyleProps {
    reverse: boolean
}

export interface DeliveryProps {
    title: string
    children: string
    background_Button: string
    buttonText: string
    backgroundImage: ImageProps
}

export interface ContentProps extends StyleProps {
    title: string
    textButton: string
    children: string 
    backgroundImage: ImageProps
    background_Button: string 
}

export interface DropDownProps {
    isVisible?: boolean
    children: React.ReactNode
}

export interface PopUpProps {
    isVisible: boolean
}

export interface NavProps {
    urlImage: string
    textoAlternativo?: string
}

export interface LinkProps {
    isBlack?: boolean
    handleOver?: () => void 
    handleOut?: () => void
}
