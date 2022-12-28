import Link from "next/link";

const UserIcon = () => {
  return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 24 24"
	  className="w-5 h-5 mr-2 pt-1 hover:text-gray-800"
      >
        <path d="M16.043,14H7.957A4.963,4.963,0,0,0,3,18.957V24H21V18.957A4.963,4.963,0,0,0,16.043,14Z" 
		fill="#455d70"
		data-original="#000000"/>
        <circle cx="12" cy="6" r="6" 
		fill="#455d70"
		data-original="#000000"/>
      </svg>
  );
};

export default UserIcon;
