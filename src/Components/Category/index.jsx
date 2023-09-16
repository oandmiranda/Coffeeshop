import { Description, Image, ItemCategory, Section } from "./styles";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";
import Title from "../Title";

const Category = () => {
    const categories = useSelector(state => state.categories)

    return (
        <Section>
                    <Title
                        positionTop="15px"
                        positionLeft="60px"
                        positionRight="65px"
                        color="black"
                        fontSize="1.8rem"
                    >
                        Conheça nosso menu completo
                    </Title>
            { categories.map((item, index) => (
                <ItemCategory key={index}>
                    <Link to={`/categoria/${item.id}`}>
                        <div>
                            <Image src={item.image}/>
                            <Description>{item.name}</Description>
                        </div>
                    </Link>
                </ItemCategory>
            ))}
        </Section>
    )
}

export default Category;
