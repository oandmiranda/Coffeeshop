import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import Category from "../../Components/Category";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import Button from "../../Components/Button";
import { Image, Item, Description, DivButton } from "../../Components/Container/styles";

const Category = () => {
    const { categoryRoute } = useParams();
    const { categories, items } = useSelector(state => ({
        categories: state.categories.filter(category => category.id === categoryRoute),
        items: state.items.filter(item => item.category === categoryRoute),
    }))
    
    const props = {
        content: categories,
        height: '75vh',
        children: 'Ver lista',
        subtitle: categories.name,
        positionTop: "45%",
        positionLeft: "9%",
        positionRight: "0",
        color: "#fff",
        fontSize: "1.3rem",
    }

    return (
        <>
            <Header {...props}/>
            <Container>
                { items.map(item => (
                    <li key={item.id}>
                    <Link to="/">
                        <Item>
                            <Image src={item.image} />
                            <Description>{item.name}</Description>
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