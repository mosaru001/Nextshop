import Link from 'next/link'
import { HamburgerData } from '../../../data/hamburger-data'

const Hamburger = () => {
	return <>
        <div className='border-t-4 border-t-green-500'>
            <div className='bg-white border-t-2 border-t-white'>
                <ul>
                    {HamburgerData.map((data:any, index:any) => {
                        return (
                            <Link href={data.href} key={index} legacyBehavior>
                                <li>
                                    <div className='bg-white-100 font-thin text-lg color-hamburger inline-flex item-center px-4 py-2 transition w-full hover:bg-gray-200 hover:cursor-pointer'>
                                        <div className='w-6 h-6 ml-2 mr-3 '>{data.icon}</div>
                                        {data.title}
                                    </div>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </div>
    </>;
}

export default Hamburger
