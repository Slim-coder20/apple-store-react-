import Button from "../Button/Button";

export default function Card({
    productName,
    price,
    image,
    cartImage,
    ...props
}) {
    return (
        <div className="w-1/3 rounded-3xl overflow-hidden relative">
            <div className="absolute left-10 top-10 right-0 z-30">
                <div className="uppercase text-xs">Nouveau</div>
                <h3 className="text-4xl font-semibold">{productName}</h3>
                <div>À partir de {price} €</div>
            </div>
            <div className="absolute bottom-10 right-10 z-30">
                <Button>Acheter</Button>
            </div>
            <img src={image} alt={productName} className="z-0" />
        </div>
    );
}
