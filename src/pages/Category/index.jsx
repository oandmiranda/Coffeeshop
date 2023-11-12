import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { useMemo } from "react";
import Container from "../../Components/Container";
import Header from "../../Components/Header";
import { Image, ItemContainer, Description, ButtonCard } from "../../Components/Container/styles";
import ItemCategory from "../../Components/ItemCategory";
import Footer from "../../Components/Footer";

const Category = () => {

    const { categoryRoute } = useParams(); 
    const state = useSelector(state => state);
    const categories = useMemo(() => state.categories.filter(category => category.id === categoryRoute), [state.categories, categoryRoute]);
    const items = useMemo(() => state.items.filter(item => item.category === categoryRoute), [state.items, categoryRoute]);
    
    const itemsCategory = useSelector(state => state.items); // acessa o slice "items"
    const filteredItems = useMemo(() => { // useMemo retorna um valor memorizado até que sua dependência mude
      return itemsCategory.reduce((acc, item) => { // reduce retorna um único valor de um array (Neste caso, a função está sendo usada para agrupar imagens por categoria)
        if (!acc[item.category]) { // verifica se a categoria do item já existe no acumulador.
          acc[item.category] = []; // Se não existir, um novo array vazio é criado para essa categoria. 
        }
        acc[item.category].push(item); // adiciona o item ao array da categoria correspondente.
        return acc;
      }, {});
    }, [itemsCategory]); // dependência do useMemo (se for alterada, o novo valor é memorizado pelo hook)
 
    const currentCategoryItems = filteredItems[categoryRoute];
    console.log(currentCategoryItems);
    
    const props = useMemo(() => ({
        content: currentCategoryItems,
        height: '85vh',
        children: 'Ver lista',
        subtitle: categories.name,
        color: "#fff",
        fontSize: "1.3rem",
    }), [currentCategoryItems, categories.name]);


    return (
        <>
            <Header {...props}/>
            <Container isWhite={false}>
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
            <Footer />
        </>
    )
}

export default Category;