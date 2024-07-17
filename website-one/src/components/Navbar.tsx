'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
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
                                    <Link href='/our-mission' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        Mission
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link href='/courses-page' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        Courses
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link href='/learning-page' className='hover:underline underline-offset-4 text-xl text-[#49A097]'>
                                        Learning
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link
                                        href='/about/our-story'
                                        className='hover:underline underline-offset-4 text-xl text-[#49A097]'
                                    >
                                        Our Story
                                    </Link>
                                </Drawer.Close>
                                <Drawer.Close asChild>
                                    <Link
                                        href='/about/contact-us'
                                        className='hover:underline underline-offset-4 text-xl text-[#49A097]'
                                    >
                                        Contact Us
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
                            NotSchool
                        </div>
                    </Link>
                </div>
                <div className='flex flex-row items-center gap-12 font-bold text-[#49A097]'>
                    <Link href='/' className='hover:underline underline-offset-4'>
                        Home
                    </Link>
                    <Link href='/our-mission' className='hover:underline underline-offset-4'>
                        Mission
                    </Link>
                    <Link href='/courses-page' className='hover:underline underline-offset-4'>
                        Courses
                    </Link>
                    <Link href='/learning-page' className='hover:underline underline-offset-4'>
                        Learning
                    </Link>
                    <div className='relative group'>
                        <div className='cursor-pointer flex items-center gap-1'>
                            About
                            <ChevronDown strokeWidth={2} />
                        </div>
                        <ul className='hidden absolute left-1/2 transform -translate-x-1/2 pt-2 w-40 text-center bg-white rounded-lg group-hover:block shadow-lg'>
                            <li className='border-2 border-[#49A097] hover:bg-[#49A097] hover:text-white text-[#49A097] rounded-t-lg'>
                                <Link
                                    href='/about/our-story'
                                    className='block py-2 px-4'
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li className='border-2 border-t-0 border-[#49A097] hover:bg-[#49A097] hover:text-white text-[#49A097] rounded-b-lg'>
                                <Link
                                    href='/about/contact-us'
                                    className='block py-2 px-4'
                                >
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link href='/login-page' className='hover:underline underline-offset-4 text-[#49A097] text-sm border-2 border-[#49A097] px-3 py-1 rounded'>
                        Login
                    </Link>
                </div>
            </nav>
        </div>
    );
}
