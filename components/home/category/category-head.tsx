const HeadCategory = () => {
    return ( 
        <div>
            <div className='container grid grid-cols-12 md:gap-10 mx-auto flex justify-between inline-flex pb-1 border-b-8 border-b-green-500'>
                <div className='md:col-span-10 col-span-12 space-y-12'>
                    <a className='text-4xl font-semibold text-slate-500'> ลดอย่างแรง</a>
                </div>
                <div className='md:col-span-2 col-span-12 space-y-12 text-end'>
                    <a className='text-2xl font-normal text-gray-400 '> ดูเพิ่มเติม &gt;&gt; </a>
                </div>
                
            </div>

            <div className='container grid grid-cols-12 md:gap-10 mx-auto flex pt-5'>
                <img src="/images/items/teaser.jpg" className="md:col-span-12 col-span-12 space-y-12 w-full">

                </img>
            </div>

            <div className='container grid grid-cols-12 md:gap-10 mx-auto flex justify-between inline-flex pt-5 pb-1 border-b-4 border-b-green-500'>
            <div className='md:col-span-10 col-span-12 space-y-12'>
                <a className='text-2xl font-normal text-green-500'> ลดอย่างแรง</a>
            </div>
            <div className='md:col-span-2 col-span-12 space-y-12 text-end'>
                <a className='text-2xl font-normal text-gray-400 '> ดูเพิ่มเติม &gt;&gt; </a>
            </div>
            
        </div>
        </div>
     );
}
 
export default HeadCategory;