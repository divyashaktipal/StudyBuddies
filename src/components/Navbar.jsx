import React from 'react'

function Navbar() {
    return (
        <div className='max-w-screen-xl mx-auto py-5 text-white bg-white flex items-center'>
            <img
                className='w-[6rem]'
                src="https://s.yimg.com/fz/api/res/1.2/EOSrd6fErs7lUlRO.WakRQ--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/2030e330-a059-3d61-bfea-71f640874668/t_500x300"
                alt="Logo"
            />
            <div className='font-semibold'>
                {["Home", "About", "Study Tools", "Subject Areas"].map(elem => (
                    <a key={elem} href="#" className='text-black hover:underline mx-8'>
                        {elem}
                    </a>
                ))}
            </div>
        </div>

    )
}

export default Navbar