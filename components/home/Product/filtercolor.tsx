export default function ColorBox(): JSX.Element {
  return (
    <>
    
    <div className=" w-72 bg-white shadow px-6 py-3  border-t-2 ">

      <div className="my-5 mx-5">
        <p className="text  font-bold  text-gray-800 mb-1">
          สี
        </p>
        <div className="flex flex-col place-items-center">
          {/* col1 */}
          <div className="flex flex-row">
            <div className="tooltip">
              <span className="tooltipText">สีขาว</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-white
          checked:bg-gray-300
          hover:ring
          hover:ring-gray-300
          transition-none
        
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีแดง</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-red-500
          checked:bg-red-800
          hover:ring
          hover:ring-gray-300
           
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีน้ำเงิน</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-blue-500
          checked:bg-blue-800
          hover:ring
          hover:ring-gray-300
           
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีเขียว</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-green-500
          checked:bg-green-800
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>
          </div>
          {/* col2 */}
          <div className="flex flex-row">
            <div className="tooltip">
            <span className="tooltipText">สีน้ำตาล</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-amber-800
          checked:bg-amber-900
          hover:ring
          hover:ring-gray-300
          transition-none
           
          
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีเนื้อ</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-amber-100
          checked:bg-amber-200
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีชมพู</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-red-300
          checked:bg-red-800
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีม่วง</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-purple-500
          checked:bg-purple-800
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>

          </div>
          {/* col3 */}
          <div className="flex flex-row">
            <div className="tooltip">
            <span className="tooltipText">สีเหลือง</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-yellow-300
          checked:bg-yellow-500
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">สีฟ้า</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg-sky-200
          checked:bg-sky-900
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>
            <div className="tooltip">
            <span className="tooltipText">คละสี</span>
              <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          bg11
          checked:bg-sky-500
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
            </div>
            {/* <div>
            <input type="checkbox" id="c1" className="
          peer 
          relative 
          appearance-none 
          w-11 
          h-11
          border 
          rounded-md
          focus:outline-none
          from-red-300 via-green-300 to-blue-300 bg-gradient-to-r
          checked:bg-gray-800
          hover:ring
          hover:ring-gray-300
           
          
          "></input>
          </div> */}
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

