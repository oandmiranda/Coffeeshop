import { Description, Image, ItemCategory, Section } from "./styles";
import { Link } from "react-router-dom";
import { useSelector} from "react-redux";

const Category = () => {
    const categories  = useSelector(state => state.categories)

    return (
        <Section>
            { categories.map((item, index) => (
                <ItemCategory key={index}>
                    <Link to={`/categoria/${item.id}`}>
                        <div>
                            <Image src={item.image}/>
                            <Description>{item.description}</Description>
                        </div>
                    </Link>
                </ItemCategory>
            ))}
        </Section>
    )
}

export default Category;
