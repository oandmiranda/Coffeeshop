import Content from "../../Components/Content";
import Header from "../../Components/Header";
import coverImage from "../../assets/img/coffeeshop.png";

const headerHome = [
    { id: 1, coverImage: coverImage, name: 'coffeeshop', text: "Desde 1979 servindo o melhor café de São Paulo", isVisible: false }
  ]

const MyHistory = () => {

    const props = {
        content: headerHome,
        height: "80vh",
        subtitle: "Desde 1979 servindo o melhor café de São Paulo",
        children: "texto teste",
        positionTop: "50%",
        positionRight: "50%",
        positionLeft: "10%",
        fontSize: "3rem",
        color: '#fff',
      }

    return (
        <>
            <Header {...props} />
            <Content 
                reverse
                backgroundImage={coverImage}
                title="Nossa História"
                h4_children="hello"
                background_Button="gray"
                children={"hello word"}
            />
        </>
    )
}

export default MyHistory;