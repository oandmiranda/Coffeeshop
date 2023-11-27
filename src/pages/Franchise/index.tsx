import Content from "../../Components/Content";
import Footer from "../../Components/Footer";
import Nav from "../../Components/Header/Nav";
import HeaderFranchise from "../../Components/HeaderFranchise";
import TextArea from "../../Components/HeaderFranchise/textArea";
import boxBackground from "../../assets/img/background-franchise.png";
import historyImage from "../../assets/img/cafe-category.png";
import image1 from "../../assets/img/image-selfie1.png"
import image2 from "../../assets/img/image-selfie2.png"
import image3 from "../../assets/img/image-selfie3.png"


export default function Franchise () {

    const props = {
        image1: image1,
        image2: image2,
        image3: image3
    }

    return (
        <>
            <Nav urlImage="/assets/logo.png" style={{ position: 'fixed', top: '3px'}}/>
            <HeaderFranchise 
                title="Seja franqueado da rede de cafeterias que mais cresce no Brasil!"
                paragraph="Invista em uma marca com história, credibilidade, solidez, alta rentabilidade e que já soma mais de 120 unidades."
            />
             <Content 
                style={{ marginTop: '15px' }}
                reverse={false}
                btnVisible={false}
                backgroundImage={historyImage}
                backgroundColor="#421e12"
                positionCenter={false}
                title="Nossa história"
                paragraph="Nossa jornada em busca da melhor xícara de café nos levou a uma das mais tradicionais cafeterias de São Paulo, o [nome da cafeteria]. Localizado no coração da cidade, este estabelecimento representa a fusão perfeita entre a tradição cafeeira e o paladar moderno.
                Fundado há mais de meio século por um apaixonado por café, o [nome da cafeteria] tem uma história profundamente enraizada na cultura do café.
                Os grãos escolhidos a dedo são submetidos a um processo de torra que é uma verdadeira obra de arte. Os torrefadores experientes da cafeteria dominam a ciência e a arte de revelar os sabores intrínsecos de cada variedade de café. "
            />
                <TextArea 
                    boxBackground={boxBackground}
                    as="section"
                    title="Crescimento por meio de franquias"
                    color="#fff"
                    paragraph="Com o sucesso da unidade piloto e buscando atender as necessidades e expectativas do mercado, a (nome da cafeteria) se estruturou para expansão do seu negócio, escolhendo como estratégia de crescimento o sistema de franchising, para estar presente em todas as cidades brasileiras.
                    O mercado de cafeterias continua a crescer, e a tendência atual é de busca por experiências únicas e personalizadas, já mercado de café é um dos segmentos mais dinâmicos e lucrativos do setor alimentício. Segundo dados da Associação Brasileira da Indústria de Café (ABIC), o Brasil é o segundo maior consumidor de café do mundo, com uma taxa de crescimento anual de aproximadamente 5%. Além disso, o café gourmet e especial têm experimentado um crescimento ainda mais expressivo, com consumidores buscando experiências únicas e sabores premium.
                    Os cafés não são apenas bebidas, são momentos especiais."
                    fontSize='1.3rem'
                    hasImage={false}
                />
                <TextArea 
                    as='section'
                    title="Nosso diferencial"
                    color='#fff'
                    paragraph="Visamos a excelência em tudo o que realizamos, desde a criteriosa seleção dos grãos de café até a elaboração dos nossos produtos, desejando que nossos clientes percebam esse cuidado em cada item servido. Além disso, nos empenhamos em manter nossa cafeteria atualizada com as últimas tendências em design e tecnologia, garantindo a melhor experiência possível a todos.
                    Uma de nossas inovações mais populares é a capacidade de estampar uma selfie na bebida. Isso mesmo, o cliente pode escolher uma foto sua ou de alguém especial, e nós a reproduzimos com perfeição na bebida. Essa é uma maneira divertida e exclusiva de personalizar a experiência e torná-la ainda mais especial e única."
                    fontSize='1.3rem'
                    hasImage={true}
                    {...props}
                />
            <Footer />
        </>
    )
};