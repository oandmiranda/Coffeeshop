import Container from "../../Components/Container";
import Header from "../../Components/Header";
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { Image, Item, Description, DivButton } from "../../Components/Container/styles";
import Button from "../../Components/Button";

const Category = () => {
    const headerContent = useSelector(state => state.headerContent)
    const { categoryRoute } = useParams();
    const { categories, items } = useSelector(state => ({
        categories: state.categories.find(category => category.id === categoryRoute),
        items: state.items.filter(item => item.category === categoryRoute),
    }))
    console.log(items);

    return (
        <>
            <Header 
                content={headerContent}
                height='75vh'
            />
            <Container>
                { items.map(item => (
                    <li key={item.id}>
                    <Link to="/">
                        <Item>
                            <Image src={item.image} />
                            <Description>{item.description}</Description>
                            <DivButton>
                                <Button
                                    background_Button="black"
                                >
                                    Pedir
                                </Button>
                            </DivButton>
                        </Item>
                    </Link>
                </li>
                ))}
            </Container>
        </>
    )
}

export default Category;