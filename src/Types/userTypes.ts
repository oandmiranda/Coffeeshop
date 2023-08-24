
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

