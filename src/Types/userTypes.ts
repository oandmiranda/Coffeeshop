import { AutoplayOptions, NavigationOptions, PaginationOptions, SwiperModule } from "swiper/types";
import { IHeaderHome } from "../store/reducer/headerHome";
import { ICoffeeShopAreas } from "../store/reducer/coffeeshopAreas";
import { IHeaderStores } from "../store/reducer/headerStores";
import { ICategories } from "../store/reducer/categories";

export interface HeaderProps extends AnimationProps, TitleProps {
    height?: string
    content?: Array<{
        id: number
        image?: string
        image2?: string
        name: string
        text: string
        isVisible: boolean
    }>
}

export interface TitleProps {
    fontSize?: string
    children?: React.ReactNode
    color: string
    styleAdicional?: React.CSSProperties
    positionTop?: string
    positionLeft?: string
    positionRight?: string
}

export interface BoxProps {
    as: keyof JSX.IntrinsicElements
    children: React.ReactNode
    boxBackground: string
}

export interface ContainerProps {
    children: React.ReactNode
    height?: string
    isWhite?: string | boolean
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

export interface BoxStyled {
    backgroundImage?: string
}
export interface DropDownProps {
    isVisible?: boolean
    href?: string
    children: React.ReactNode
}

export interface AnimationProps {
    isVisible?: boolean
    subtitle?: string
    contentText?: React.ReactNode
}

export interface ItemCategoryProps {
    title: string
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

export interface FormProps {
    fontFamily?: string
}

export interface ChildrenProps {
    subtitle: string
    fontSize?: string 
    children?: React.ReactNode
}

export interface ContentProps extends ButtonProps {
    title?: string
    paragraph?: string 
    backgroundImage?: ImageProps | string
    btnVisible?: boolean
    styleAdicional?: React.CSSProperties
    reverse?: boolean
    positionCenter?: boolean
    backgroundColor?: string
}

export interface CategoryList {
    image: string
    id: string
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

// interface de estado Redux
export interface RootState {
    headerHome: IHeaderHome[]
    coffeeshopAreas: ICoffeeShopAreas[]
    headerStores: IHeaderStores[]
    categories: ICategories[];
}
