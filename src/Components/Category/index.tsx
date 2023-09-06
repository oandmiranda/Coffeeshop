import { Description, Image, ItemCategory, Section } from "./styles";
// import { CategoryList } from "../../Types/userTypes";
import { Link } from "react-router-dom";


// const categoryList: CategoryList[]

const Category = () => {
    return (
        <Section>
            { categoryList.map((item, index) => (
                <ItemCategory key={index}>
                    <Link to={`/category/${item.id}`}>
                        <div>
                            <Image src={item.image}/>
                            <Description>{item.id}</Description>
                        </div>
                    </Link>
                </ItemCategory>
            ))}
        </Section>
    )
}

export default Category;