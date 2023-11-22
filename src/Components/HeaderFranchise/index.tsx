import { HeaderFranchiseProps } from "../../Types/userTypes";
import { Box, SubTitle, TextArea, Title } from "./styles";

export default function HeaderFranchise ({title, paragraph} :HeaderFranchiseProps) {
    return (
        <Box>
            <TextArea>
                <Title>{title}</Title>
                <SubTitle>{paragraph}</SubTitle>
            </TextArea>
        </Box>
    )
};