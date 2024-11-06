import { ContentProps } from "../../Types/userTypes";
import Button from "../Button";
import { Image, ContentWrapper, TextBox, Title } from "./styles";
import { Link } from "react-router-dom";

export default function Content({
    reverse,
    backgroundImage,
    positionCenter,
    title,
    paragraph,
    background_Button,
    children,
    backgroundColor,
    styleAdicional,
    url,
    btnVisible = true,
}: ContentProps) {
    return (
        <ContentWrapper reverse={reverse} styleAdicional={styleAdicional}>
            <Image backgroundImage={backgroundImage} />
            <TextBox positionCenter={positionCenter} backgroundColor={backgroundColor}>
                <Title>{title}</Title>
                <p>{paragraph}</p>
                {btnVisible && url && ( // Verificação condicional para `url`
                    <Link to={url}>
                        <Button background_Button={background_Button}>
                            {children}
                        </Button>
                    </Link>
                )}
            </TextBox>
        </ContentWrapper>
    );
}
