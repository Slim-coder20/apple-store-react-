import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";

function App() {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Highlight */}
            <section className="max-w-7xl mx-auto p-5 text-center text-sm">
                Obtenez un crédit de 200 € à 815 € sur l’achat d’un iPhone 15 ou
                iPhone 15 Pro en faisant reprendre un iPhone 11 ou un modèle
                ultérieur1.
            </section>

            {/* Hero */}
            <section className="bg-gray-apple">
                <div className="max-w-7xl mx-auto p-10">
                    {/* Top */}
                    <div className="flex flex-wrap justify-between py-[80px]">
                        {/* Title */}
                        <div className="text-5xl">
                            <h1 className="text-gray-700 font-semibold">
                                <span className="text-red-500">Store.</span> Les
                                fêtes sont là.
                                <br />
                                La magie peut commencer.
                            </h1>
                        </div>

                        {/* Contact */}
                        <div className="self-end flex flex-col gap-5">
                            <div className="flex gap-3">
                                <div>
                                    <img
                                        src="assets/specialist.jpeg"
                                        alt="Specialist"
                                        className="w-8"
                                    />
                                </div>
                                <div>
                                    <b>Besoin d'aide pour faire vos achats ?</b>
                                    <div className="text-blue-500 cursor-pointer hover:underline">
                                        Contacter nos spécialistes
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <div>
                                    <img
                                        src="assets/store.png"
                                        alt="Store"
                                        className="w-8"
                                    />
                                </div>
                                <div>
                                    <b>Se rendre dans un Apple Store</b>
                                    <div className="text-blue-500 cursor-pointer hover:underline">
                                        Trouver un magasin à proximité
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="flex justify-between">
                        {/* Mac */}
                        <div className="flex flex-col text-center gap-4">
                            <img
                                src="assets/mac.png"
                                alt="mac"
                                className="w-[120px]"
                            />
                            Mac
                        </div>
                        {/* iPhone */}
                        <div className="flex flex-col text-center gap-4">
                            <img
                                src="assets/iphone.png"
                                alt="iPhone"
                                className="w-[120px]"
                            />
                            iPhone
                        </div>
                        {/* iPad */}
                        <div className="flex flex-col text-center gap-4">
                            <img
                                src="assets/ipad.png"
                                alt="iPad"
                                className="w-[120px]"
                            />
                            iPad
                        </div>
                        {/* Watch */}
                        <div className="flex flex-col text-center gap-4">
                            <img
                                src="assets/watch.png"
                                alt="watch"
                                className="w-[120px]"
                            />
                            Apple Watch
                        </div>
                        {/* AirPods */}
                        <div className="flex flex-col text-center gap-4">
                            <img
                                src="assets/airpods.png"
                                alt="airpods"
                                className="w-[120px]"
                            />
                            AirPods
                        </div>
                        {/* AirTag */}
                        <div className="flex flex-col text-center gap-4">
                            <img
                                src="assets/airtag.png"
                                alt="airtag"
                                className="w-[120px]"
                            />
                            AirTag
                        </div>
                    </div>

                    {/* Items */}
                    <section className="mt-24">
                        <h2 className="text-3xl font-semibold">
                            <span className="text-red-500">
                                Les dernières nouveautés.
                            </span>{" "}
                            Pour les personnes que vous faites passer en
                            premier.
                        </h2>

                        {/* Cards */}
                        <div className="flex justify-between gap-10 mt-10">
                            {/* Card */}
                            <Card
                                productName="iPhone 15 Pro"
                                price="1 229"
                                image="assets/items/iphone.jpeg"
                            />
                            {/* Card */}
                            <Card
                                productName="Apple Watch 9"
                                price="449"
                                image="assets/items/applewatch.jpeg"
                            />
                            {/* Card */}
                            <Card
                                productName="MacBook Pro"
                                price="1 999"
                                image="assets/items/macbook.jpeg"
                            />
                        </div>
                    </section>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
}

export default App;
