
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from "swiper/types";

export interface HeaderProps extends ContainerProps, PopUpProps, TitleProps {
    children: string
    content: Array<{
        id: number
        coverImage: string
        image2?: string
        name: string
        text: string
        isVisible: boolean
    }>
}

export interface ContainerProps {
    children: React.ReactNode
    height?: string
}

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
    reverse?: boolean
    positionCenter?: boolean
}

export interface DropDownProps {
    isVisible?: boolean
    children: React.ReactNode
}

export interface PopUpProps {
    isVisible?: boolean
    subtitle?: string
    contentText?: React.ReactNode
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
    positionCenter: boolean
}

export interface ChildrenProps {
    subtitle: string
    fontSize?: string 
    children?: React.ReactNode
}

export interface ContentProps extends StyleProps, ButtonProps {
    title: string
    paragraph: string 
    backgroundImage: ImageProps
    btnVisible: boolean
}

export interface CategoryList {
    image: string
    id: string
}

export interface TitleProps {
    positionTop: string
    positionLeft: string 
    positionRight: string 
    fontSize?: string
    children: React.ReactNode
    color: string
}