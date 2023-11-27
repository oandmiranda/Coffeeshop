import {Box, Title, Paragraph, ImageArea, Image} from "./styles";

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
}

export default function TextArea ({as, boxBackground, backgroundWhite, title, color, paragraph, fontSize, hasImage, ...props}: textAreaProps) {
    return (
        <Box as={as} boxBackground={boxBackground} backgroundWhite={backgroundWhite}>
            <Title color={color}>{title}</Title>
            <Paragraph fontSize={fontSize}>{paragraph}</Paragraph>
            { hasImage && (
                <ImageArea>
                    <Image src={props.image1}/>
                    <Image src={props.image2}/>
                    <Image src={props.image3}/>
                </ImageArea>
            )}
        </Box>
    );
}