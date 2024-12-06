"use client";

import React, { useState } from 'react';
import { Drawer, Button, Tooltip } from 'antd';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { AllImages } from '@/assets/Allimages/AllImages';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    const labels = [
        { name: "Home", link: "/home" },
        { name: "Projects", link: "/projects" },
        { name: "Services", link: "/services" },
        { name: "Contact Us", link: "/contact-us" },
        { name: "Instant quote", link: "/instant-quote" },
    ];

    return (
        <nav className="w-full bg-[#37453b] fixed z-50">
            <div className="container mx-auto px-4 flex items-center justify-between h-16">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            height={0}
                            width={0}
                            src={AllImages.logo}
                            alt="Logo"
                            className="h-8 w-auto object-contain cursor-pointer"
                        />
                    </Link>
                </div>

                {/* Menu Items for Desktop */}
                <div className="hidden md:flex items-center space-x-8">
                    {labels.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <button
                                className={`px-4 text-lg ${selected === index
                                    ? "border-0 border-b border-white"
                                    : ""
                                    } ${item.name === "Instant quote" ? "bg-white text-prmary px-6 py-2" : "text-white hover:text-gray-300"}`}
                                onClick={() => selected !== index && setSelected(index)}
                            >
                                {item.name}
                            </button>
                        </Link>
                    ))}
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <button className="border border-white px-6 py-2 text-white hover:text-gray-300 transition-all">
                        Log In
                    </button>
                    <button className="bg-[#506153] text-white border border-white px-6 py-2">
                        Sign Up
                    </button>
                </div>

                {/* Hamburger Menu for Mobile */}
                <div className="md:hidden flex items-center">
                    <MenuOutlined
                        className="text-2xl text-white cursor-pointer"
                        onClick={() => setDrawerOpen(true)}
                    />
                </div>
            </div>

            {/* Drawer for Mobile Menu */}
            <Drawer
                title="Menu"
                width={300}
                placement="right"
                onClose={() => setDrawerOpen(false)}
                open={drawerOpen}
                closeIcon={<CloseOutlined className="text-lg" />}
            >
                <div className="flex flex-col space-y-4">
                    {labels.map((item, index) => (
                        <Link href={item.link} key={index}>
                            <button
                                className={`text-lg w-full text-left ${item.name === "Instant quote" ? "bg-primary text-white text-center px-6 py-2" : "text-gray-700 hover:text-blue-600"}`}
                                onClick={() => {
                                    setSelected(index);
                                    setDrawerOpen(false);
                                }}
                            >
                                {item.name}
                            </button>
                        </Link>
                    ))}

                    <button className="border border-gray-700 px-6 py-2 text-gray-700 font-semibold hover:text-blue-600">
                        Log In
                    </button>
                    <button className="bg-[#506153] text-white border border-white px-6 py-2">
                        Sign Up
                    </button>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;
