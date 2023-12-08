export default function Card({ productName, price, image, ...props }) {
    return (
        <div className="w-1/3 rounded-3xl overflow-hidden relative">
            <div className="absolute left-10 top-10 right-0 z-30">
                <div className="uppercase text-xs">Nouveau</div>
                <h3 className="text-4xl font-semibold">{productName}</h3>
                <div>À partir de {price} €</div>
            </div>
            <div className="absolute bottom-10 right-10 z-30">
                <div className="rounded-full bg-blue-500 hover:bg-blue-400 duration-150 cursor-pointer text-white px-5 py-1.5">
                    Acheter
                </div>
            </div>
            <img src={image} alt={productName} className="z-0" />
        </div>
    );
}
