import { useSelector } from "react-redux";
import { RootState } from "../../Types/userTypes";
import Header from "../../Components/Header";
import Category from "../../Components/ItemCategory";
import Footer from "../../Components/Footer";

export default function Menu() {

    const headerMenu = useSelector((state: RootState) => state.headerMenu);
    const props = {
        content: headerMenu,
        height: "85vh",
        subtitle: "Visite a Cafeteria mais perto de você !",
        contentText: "",
        fontSize: "3rem",
        color: '#fff',
      };

    return (
        <>
            <Header {...props}/>
            <Category title="O que você quer pedir hoje?"/>
            <Footer />
        </>
    )
}