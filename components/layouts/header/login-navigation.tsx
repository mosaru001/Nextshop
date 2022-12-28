import Link from 'next/link'
import PhoneIcon from '../../icons/header/phone-icon'
import UserIcon from '../../icons/header/user-icon'
export default function Login(): any {
	return (
		<div className="w-full bg-white flex text-black text-s px-20 md:w-md">
			<div className="w-max">
				<div className="w-max flex">
					<div className="w-fit flex">
						<Link
							href="/about"
							className="bg-slate-100 text-blue-900 border-4 border-transparent hover:text-black"
							legacyBehavior>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" className="inline-flex w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
								</svg>
								&nbsp;<b>ติดต่อสอบถาม 1371</b>&nbsp;
							</div>

						</Link>
					</div>
					<div className="w-full flex-1 grow mx-60 mx-100% md:mx-60 invisible md:visible">

					</div>
					<div className="bg-slate-100 text-blue-900 ml-36 border-4 border-transparent hover:text-black">
						<Link href="/about" legacyBehavior>
							<b>ติดตามสถานะการสั่งซื้อ</b>
						</Link>
					</div>
					<div className=" bg-slate-300 text-blue-900 ml-2 border-4 border-transparent hover:text-black">
						<Link href="/about" legacyBehavior>
							<div>
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="inline-flex text-center w-5 h-5">
									<path stroke-linecap="round" stroke-linejoin="round"
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
								</svg>
								<b>เข้าสู่ระบบ | สมัครสมาชิก</b>
							</div>

						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

