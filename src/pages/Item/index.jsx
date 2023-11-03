import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header";


const Item = () => {

    const { itemRoute } = useParams();
    const { items } = useSelector(state => ({
        items: state.items.filter(item => item.name === itemRoute)
    }))
   

    const props = {
        content: items,
        height: '96vh',
        children: 'Ver lista',
        subtitle: items.name,
        positionTop: "45%",
        positionLeft: "9%",
        positionRight: "0",
        color: "#fff",
        fontSize: "1.3rem",
    }

    return (
        <>
            <Header {...props}/>
        </>
    )
};

export default Item;