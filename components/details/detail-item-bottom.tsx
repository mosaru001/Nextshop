const DetailItemBottom = (props:any) => {
	return (
		<div className='container mx-auto mt-4 '>
			<hr />
			<div className='bg-green-500 py-3 px-10 inline-block mt-4 text-2xl text-bold text-white'>
				รายละเอียด
			</div>
			<div className='h-1 bg-green-500 mt-2' />
			<div className='my-8 '>
				<span className='flex  justify-between color-detail text-2xl '>
					<p className='font-bold'>ขนาดสินค้ารวมบรรจุภัณฑ์</p>
					<p className='mb-4 mr-72'>{props.size}</p>
				</span>
				<hr />
			</div>
			<div className='my-8 '>
				<span className='flex justify-between  color-detail text-2xl '>
					<p className='font-bold'>น้ำหนักรวมบรรจุภัณฑ์</p>
					<p className='mb-4 mr-96'>{props.weight1}</p>
				</span>
				<hr />
			</div>

			<div className='color-detail'>
				<ul className='text-2xl mt-4'>
					<li className='py-4 font-bold'>
						{props.description}
					</li>
					<li>
						แบรนด์ : <span className='font-bold'>{props.model}</span>
					</li>
					<li>ขนาด :{props.weight2}</li>
				</ul>
				
			</div>
		</div>
	)
}

export default DetailItemBottom
