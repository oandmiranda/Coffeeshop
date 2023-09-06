import { Description, Image, ItemCategory, Section } from "./styles";
import { CategoryList } from "../../Types/userTypes";
import { Link } from "react-router-dom";
import imageXicara from "../../img/xicara.png";
import imageGraos from "../../img/graos.png";
import imageCoffe from "../../img/coffe-cookie.png";
import imageCookie from "../../img/coffe-cookie.png";
import imageCoffeeShop from "../../img/coffeeshop.png";

const categoryList: CategoryList[] = [
    { id: 'Cafés', image: imageXicara },
    { id: 'Cookies', image: imageGraos },
    { id: 'Croissant', image: imageCoffe },
    { id: 'Sobremesas', image: imageCookie },
    { id: 'Breakfast', image: imageCoffeeShop },
]

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