import Nav from "../../Components/Header/Nav";
import HeaderFranchise from "../../Components/HeaderFranchise";

export default function Franchise () {
    return (
        <>
            <Nav urlImage="/assets/logo.png" style={{ position: 'fixed', top: '3px'}}/>
            <HeaderFranchise 
                title="Seja franqueado da rede de cafeterias que mais cresce no Brasil!"
                paragraph="Invista em uma marca com história, credibilidade, solidez, alta rentabilidade e que já soma mais de 20 unidades."
            />
        </>
    )
};