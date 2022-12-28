import Link from "next/link";


export default function Breadcrumb(): JSX.Element {
  return <>
    <div className="flex items-center px-2 xl:px-0">
      <Link href={"/"} legacyBehavior>
        <div className="flex items-center space-x-2 text-slate-600 hover:text-green-500">
          <svg className="h-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"
            ></path>
          </svg>
          <h1 className="text-sm">หน้าหลัก</h1>
        </div>
      </Link>
    </div>
    <div>
      <svg className="h-5 text-slate-600" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10Z"
        ></path>
      </svg>
    </div>
    <div>
      <h1 className="font-semibold text-sm text-green-500">Flash Sale</h1>
    </div>
  </>;
}
