import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { useMemo } from "react";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import { Image, ItemContainer, Description, ButtonCard } from "../../Components/Container/styles";
import ItemCategory from "../../Components/ItemCategory";

const Category = () => {

    const { categoryRoute } = useParams();
    const state = useSelector(state => state);
    const categories = useMemo(() => state.categories.filter(category => category.id === categoryRoute), [state.categories, categoryRoute]);
    const items = useMemo(() => state.items.filter(item => item.category === categoryRoute), [state.items, categoryRoute]);
    
    const images = useSelector(state => state.items);
    const filteredImages = useMemo(() => {
      return images.reduce((acc, image) => {
        if (!acc[image.category]) {
          acc[image.category] = [];
        }
        acc[image.category].push(image);
        return acc;
      }, {});
    }, [images]);
 
    const currentCategoryImages = filteredImages[categoryRoute];
    
    const props = useMemo(() => ({
        content: currentCategoryImages,
        height: '85vh',
        children: 'Ver lista',
        subtitle: categories.name,
        positionTop: "45%",
        positionLeft: "9%",
        positionRight: "0",
        color: "#fff",
        fontSize: "1.3rem",
    }), [currentCategoryImages, categories.name]);


    return (
        <>
            <Header {...props}/>
            <Container>
                { items.map(item => (
                    <li key={item.id}>
                    <Link to={item.name}>
                        <ItemContainer>
                            <Image src={item.image} />
                            <Description>{item.name}</Description>
                                <ButtonCard
                                    background_Button="black"
                                >
                                    Pedir
                                </ButtonCard>
                        </ItemContainer>
                    </Link>
                </li>
                ))}
            </Container>
            <ItemCategory title="Conheça mais" />
        </>
    )
}

export default Category;