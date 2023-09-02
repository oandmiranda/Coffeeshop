
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

export interface StyleProps {
    reverse: boolean
}

export interface DropDownProps {
    isVisible?: boolean
    children: React.ReactNode
}

export interface PopUpProps extends ButtonProps {
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

export interface ButtonProps {
    background_Button?: string
    children?: React.ReactNode
    fontSize?: string 
}

export interface DeliveryProps extends ButtonProps {
    title: string
    h2_children: string
    backgroundImage: ImageProps
}

export interface ChildrenProps extends ButtonProps {
    subtitle: string
}

export interface ContentProps extends StyleProps, ButtonProps {
    title: string
    h4_children: string 
    backgroundImage: ImageProps
}