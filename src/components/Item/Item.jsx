export default function Item(props) {
    return (
        <div className="border-t mt-10">
            {/* <div className="text-center">
                        Aucun élément pour le moment
                    </div> */}
            <div className="p-10 flex gap-5">
                {/* Photo */}
                <div className="w-[25%]">
                    <img src="/assets/iphone15pro.png" alt="iPhone 15 Pro" />
                </div>
                <div className="w-full">
                    {/* Details */}
                    <div className="flex justify-between gap-4 text-2xl w-full">
                        {/* Product */}
                        <h2 className="font-semibold">iPhone 15 Pro</h2>

                        {/* Quantity */}
                        <div>
                            <select name="quantity" className="bg-transparent">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>

                        {/* Price */}
                        <div className="text-right w-[30%]">
                            <h3 className="font-semibold">1 609,00 €</h3>
                            <div className="text-gray-500 text-sm">
                                <div className="mb-1">
                                    Rémunération pour copie privée incluse de
                                    14,00 €
                                </div>
                                <div>Dont éco-participation: 0,04 €</div>
                            </div>
                            <div className="text-blue-500 mt-3 text-base inline-block hover:text-blue-800 cursor-pointer">
                                Supprimer
                            </div>
                        </div>
                    </div>
                    <div className="border-t mt-9 pt-9">
                        {/* Apple care plus */}
                        <div className="flex gap-3">
                            <div className="pt-1">
                                <img
                                    src="/assets/apple-care.png"
                                    alt="apple"
                                    className="w-[18px]"
                                />
                            </div>
                            <div className="w-full flex justify-between">
                                <div>
                                    <div className="text-[17px] font-semibold">
                                        AppleCare+ pour iPhone 15 Pro
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        Inscription automatique avec votre
                                        matériel Apple.
                                    </div>
                                    <div className="text-gray-500 text-sm mt-1">
                                        Inclut la taxe sur les primes
                                        d’assurance au taux applicable.
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[17px] font-semibold">
                                        229,00 €
                                    </div>
                                    <div className="text-blue-500 mt-3 text-base inline-block hover:text-blue-800 cursor-pointer">
                                        Supprimer
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
