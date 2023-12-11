import Button from "../components/Button/Button";
import Item from "../components/Item/Item";

export default function Shop() {
    return (
        <div className="bg-gray-apple">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-semibold pt-10 text-5xl text-center">
                    Le montant total de votre Panier est de 0 €.
                </h1>
                <div className="flex justify-center mt-10">
                    <Button>Valider la commande</Button>
                </div>

                {/* Items */}
                <Item />

                {/* Total */}
                <div className="border-t mt-10">
                    <div className="flex justify-between gap-5 p-10">
                        <div className="w-[25%]"></div>
                        <div className="w-full">
                            <div className="w-full flex justify-between text-lg font-light">
                                <div>
                                    <div>Sous-total</div>
                                    <div className="mt-1">Livraison</div>
                                </div>
                                <div className="text-right">
                                    <div>0 €</div>
                                    <div>GRATUIT</div>
                                </div>
                            </div>
                            <div className="border-t mt-5 flex justify-between text-xl pt-5">
                                <div className="font-semibold">Total</div>
                                <div className="text-right">
                                    <div>0 €</div>
                                    <div className="text-gray-500 text-sm">
                                        TVA de 0 € incluse
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-end mt-10">
                                <Button large>Valider la commande</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
