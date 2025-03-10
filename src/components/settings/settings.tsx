'use client';

import { useState } from "react";
import Account from "./account";
import Legal from "./legal";
import Contact from "./contact";

type Tab = "account" | "contact" | "legal"

export default function Settings() {

    const [activeTab, setActiveTab] = useState<Tab>("account");

    return (
        <div className="flex mt-6 gap-6">
            <div className="flex md:flex-col flex-row md:w-[30%] gap-4">
                {["Account", "Legal", "Contact"].map((tab) => (
                    <button
                        key={tab}
                        className={`${activeTab === tab.toLowerCase() ? "button-secondary" : "btn btn-ghost"}`}
                        onClick={() => setActiveTab(tab.toLowerCase() as Tab)}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="md:w-[60%] pt-4">
                {activeTab === 'account' && <Account/>}
                {activeTab === 'legal' && <Legal/>}
                {activeTab === 'contact' && <Contact/>}
            </div>
        </div>
    )
}