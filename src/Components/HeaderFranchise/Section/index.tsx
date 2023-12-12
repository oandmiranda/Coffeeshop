import {Box, Title, Paragraph, ImageArea, Image, Button} from "./styles";
import {textAreaProps} from "../../../Types/userTypes";

export default function Section ({as, boxBackground, backgroundWhite, title, color, paragraph, fontSize, hasImage, hasButton, ...props}: textAreaProps) {
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
            { hasButton && (
                <Button as='a'>Quero ser um franqueado</Button>
            )}
        </Box>
    );
}