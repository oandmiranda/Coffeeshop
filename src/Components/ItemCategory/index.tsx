import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import { RootState, ItemCategoryProps } from "../../Types/userTypes";
import Title from "../Title";
import { Description, Image, Item, Section } from "./styles";

export default function ItemCategory ({title}: ItemCategoryProps) {
    const categories = useSelector((state: RootState) => state.categories)

    return (
        <Section>
            <Title
                positionTop="15px"
                positionLeft="60px"
                positionRight="65px"
                color="black"
                fontSize="1.8rem"
            >
                {title}
            </Title>
            { categories.map((item, index) => (
                <Item key={index}>
                    <Link to={`/categoria/${item.id}`}>
                        <div>
                            <Image src={item.categoryImage}/>
                            <Description>{item.name}</Description>
                        </div>
                    </Link>
                </Item>
            ))}
        </Section>
    );
};
