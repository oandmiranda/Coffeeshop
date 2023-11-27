
import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from "swiper/types";

export interface HeaderProps extends ContainerProps, PopUpProps, TitleProps {
    children: string
    content?: Array<{
        id: number
        image?: string
        image2?: string
        name: string
        text: string
        isVisible: boolean
    }>
}

export interface ContainerProps extends StyledContainerProps {
    children: React.ReactNode
    height?: string
}

export interface StyledContainerProps {
    isWhite?: string
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
    backgroundColor?: string
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
    style?: React.CSSProperties
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
    style?: React.CSSProperties
}

export interface CategoryList {
    image: string
    id: string
}

export interface TitleProps {
    fontSize?: string
    children: React.ReactNode
    color: string
    style?: React.CSSProperties
}

export interface HeaderFranchiseProps {
    title: string
    paragraph: string
}

export interface textAreaProps {
    as?: keyof JSX.IntrinsicElements
    boxBackground?: string
    imageBackground?: string
    backgroundWhite?: boolean
    title?: string
    color?: string
    paragraph?: string
    hasImage?: boolean
    image1?: string 
    image2?: string 
    image3?: string 
    fontSize?: string
    hasButton?: boolean
}