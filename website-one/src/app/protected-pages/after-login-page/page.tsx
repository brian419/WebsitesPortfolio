// Website One, After Login Page (page.tsx)

//figure out how to disable current navbar
//figure out how to use a different navbar for protected pages (like, instead of "login" in navbar, there's a logout button)


import Link from 'next/link';

export default function AfterLoginPage() {
    return (
        <div className='homepage'>
            <header className='hero-section bg-[#49A097] text-white text-center py-12'>
                <h1 className='text-4xl font-bold mb-4'>Welcome to NotSchool</h1>
                <p className='text-xl mb-6'>Join us today and start your learning journey!</p>
                <Link href='/login-page' className='bg-white text-[#49A097] px-6 py-3 rounded-full font-bold text-lg'>
                    Sign Up
                </Link>
            </header>
            <section className='features py-12 px-6'>
                <h2 className='text-2xl font-bold text-center mb-6'>Why Join NotSchool?</h2>
                <div className='flex flex-col md:flex-row justify-around gap-6'>
                    <div className='feature-card bg-white shadow-md p-6 rounded-lg text-center'>
                        <h3 className='text-xl font-bold mb-2'>High-Quality Courses</h3>
                        <p className='text-md'>Access a wide range of courses taught by industry experts.</p>
                    </div>
                    <div className='feature-card bg-white shadow-md p-6 rounded-lg text-center'>
                        <h3 className='text-xl font-bold mb-2'>Flexible Learning</h3>
                        <p className='text-md'>Learn at your own pace, anytime and anywhere.</p>
                    </div>
                    <div className='feature-card bg-white shadow-md p-6 rounded-lg text-center'>
                        <h3 className='text-xl font-bold mb-2'>Community Support</h3>
                        <p className='text-md'>Join a vibrant community of learners and educators.</p>
                    </div>
                </div>
            </section>
            <section className='signup-form bg-gray-100 py-12 text-center'>
                <h2 className='text-2xl font-bold mb-4'>Get Started for Free</h2>
                <p className='text-md mb-6'>Get alerted for new courses and lessons through our mailing subscription!</p>
                <form className='inline-block'>
                    <input type='email' placeholder='Enter your email' className='px-4 py-2 border rounded-l-full' />
                    <button type='submit' className='bg-[#49A097] text-white px-6 py-2 rounded-r-full font-bold'>
                        Get Started
                    </button>
                </form>
            </section>
        </div>
    );
}
