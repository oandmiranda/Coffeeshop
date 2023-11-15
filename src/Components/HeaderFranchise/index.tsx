import { Box, TextArea } from "./styles";
import { HeaderFranchiseProps } from "../../Types/userTypes";

export default function HeaderFranchise ({title, paragraph} :HeaderFranchiseProps) {
    return (
        <Box>
            <TextArea>
                <h1>{title}</h1>
                <p>{paragraph}</p>
            </TextArea>
        </Box>
    )
};