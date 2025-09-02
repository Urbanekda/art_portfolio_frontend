import Item from "../components/item";
import { useGraphic } from "../hooks/useGraphic";

export default function PortfolioGrafika() {
    const { data, loading, error } = useGraphic();

    if (loading) return (
        <div className="bg-main-bg font-exo2 text-3xl justify-center h-150">
            <p className="p-8">Loading...</p>
        </div>
    )
    if (error) return (<p>An error has occured</p>)

    return(
        <div className="bg-main-bg">
            <div className="pb-5 mb-3 border-b border-floral-white">
                <h1 className="text-floral-white text-left pt-8 pl-8 pb-4 font-exo2 text-3xl">
                    Grafická tvorba
                </h1>
                <p className="text-floral-white font-lato text-md px-8 mb-4">V mé grafické tvorbě dominuje digitální koláž, která mi umožňuje originálním způsobem pracovat se strukturami a vrstvami. Spojuji prvky organického materiálu a strojové mechaniky, abych vytvořil surrealistické světy, kde se prolínají motivy strachu, děsu, transcendence a temnoty. Moje práce se zaměřuje na zosobnění subjektivních pocitů a vnímání, kdy složitá emocionální témata transformuji do vizuálních obrazů, které diváka vtahují do hloubky vlastního prožitku. 
                     </p>
                <p className="text-floral-white font-lato text-md px-8 mb-4">Velkou inspirací mi jsou H. R. Giger a Zdzisław Beksiński, jejichž temná, ale fascinující estetika se odráží v mé vlastní tvorbě. Vytvářím kompozice, které mají za cíl nejen upoutat pozornost svou vizuální komplexností, ale i podnítit divákovo zamyšlení nad jeho vlastními emocemi a vnímáním reality. Mé grafiky jsou dostupné k zakoupení ve formě tisku.</p> 
            </div>
           <div className="grid grid-cols-1 gap-1 ml-9 mb-8 sm:grid-cols-2 md:grid-cols-3">
                {data && data.map(artwork => (
                    <Item artwork={artwork} key={artwork.id} />
                ))}
           </div>
        </div>
    );
};