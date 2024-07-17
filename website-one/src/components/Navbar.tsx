'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Drawer } from 'vaul';

export default function Navbar() {
    return (
        <div className='fixed top-0 w-full z-[1000] bg-white border-b-[3px] border-[#ccc]'>
            <div className='flex md:hidden items-center py-4 px-4 gap-4'>
                <Drawer.Root direction='left'>
                    <Drawer.Trigger>
                        <Menu className='size-6' />
                    </Drawer.Trigger>
                    <Drawer.Portal>
                        <Drawer.Overlay className='fixed inset-0 bg-black/40 z-[1001]' />
                        <Drawer.Title hidden>Navigation</Drawer.Title>
                        <Drawer.Content
                            aria-describedby={undefined}
                            aria-description='navigation links'
                            className='bg-white h-full w-[calc(100%-5rem)] mt-24 fixed bottom-0 right-20 px-6 z-[1002]'
                        >
                            <nav className='flex flex-col gap-4'>
                                <div className='flex my-3 justify-between'>
                                    <Link href='/' className='flex gap-4 items-center'>
                                        {/* <Image src={imageName} alt='Image Placeholder' className='size-10' /> */}
                                        <span className='font-bold text-xl text-[#49A097]'>NotSchool</span>
                                    </Link>
                                    <Drawer.Close>
                                        <X className='size-6' />
                                    </Drawer.Close>
                                </div>
                                <Drawer.Close asChild>
                                    <Link href='/' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        Home
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link href='/place-b' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        PLACE_B
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link href='/place-c' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        PLACE_C
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link href='/place-d' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        PLACE_D
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link
                                        href='/about/place-e'
                                        className='text-xl text-[#49A097]'
                                    >
                                        PLACE_E
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link
                                        href='/about/place-f'
                                        className='text-xl text-[#49A097]'
                                    >
                                        PLACE_F
                                    </Link>
                                </Drawer.Close>
                            </nav>
                        </Drawer.Content>
                    </Drawer.Portal>
                </Drawer.Root>
                <span className='font-bold text-xl text-[#49A097]'>
                    NotSchool
                </span>
            </div>
            <nav className='flex-row items-center justify-between py-4 px-8 md:flex hidden'>
                <div>
                    <Link
                        href='/'
                        className='text-2xl font-bold text-[#49A097]'>
                        <div className='flex flex-row items-center gap-4'>
                            {/* <Image
                                src={aecsLogo}
                                alt='AECS Logo'
                                className='size-12'
                            /> */}
                            NotSchool
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row items-center gap-20 font-bold text-[#49A097]'>
                    <Link href='/' className='hover:underline underline-offset-4'>
                        Home
                    </Link>
                    <Link href='/place-b' className='hover:underline underline-offset-4'>
                        PLACE_B
                    </Link>
                    <Link href='/place-c' className='hover:underline underline-offset-4'>
                        PLACE_C
                    </Link>
                    <Link href='/place-d' className='hover:underline underline-offset-4'>
                        PLACE_D
                    </Link>
                    <div className='cursor-pointer items-center gap-1 group relative'>
                        <div className='flex flex-row'>
                            About
                            <ChevronDown strokeWidth={2} />
                        </div>
                        <ul className='hidden absolute right-0 pt-2 w-40 bg-white rounded-lg group-hover:block border-collapse'>
                            <li className='border-2 border-[#49A097] hover:bg-[#49A097] hover:text-white text-[#49A097] rounded-t-lg'>
                                <Link
                                    href='/about/place-e'
                                    className='block py-2 px-4'
                                >
                                    PLACE_E
                                </Link>
                            </li>
                            <li className='border-2 border-t-0 border-[#49A097] hover:bg-[#49A097] hover:text-white text-[#49A097] rounded-b-lg'>
                                <Link
                                    href='/about/place-f'
                                    className='block py-2 px-4'
                                >
                                    PLACE_F
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
