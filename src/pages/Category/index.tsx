import Header from "../../Components/Header";
import coffee_Cookie from "../../img/coffe-cookie.png";
import croissant from "../../img/croissant.png";
import coffeeshop from "../../img/coffeeshop.png";
import cake from "../../img/cake.png";

const headerContent = [
    { id: 1, image: coffee_Cookie, name: 'coffe and cookie', text: '', isVisible: true },
    { id: 2, image: croissant, name: 'croissant', text: 'Eleito o melhor Croissant pela Paris Coffe', isVisible: false },
    { id: 3, image: coffeeshop, name: 'coffeeshop', text: '', isVisible: false},
    { id: 4, image: cake, name: 'cake', text: '', isVisible: false }
  ]

const Category = () => {
    return (
        <>
            <Header 
                headerContent={headerContent}
                height="70vh"
            />
        </>
    )
}

export default Category;