import Breadcrumb from "./breadcrumb";
import Dropdown from "./Dropdown/dropdown";

export default function HeaderDropdownBreadcrumb(): JSX.Element {
  return (
    <>
    
      <div className="bg-gray-100 max-w h-10 xl:px-32 xl:py-5 xl:flex items-center xl:space-x-5 space-y-2 xl:space-y-0">
        <div>
          <Dropdown></Dropdown>
        </div>
        <div className="flex pt-1 xl:pt-0 space-x-2">
          <Breadcrumb></Breadcrumb>
        </div>
      </div>
    </>
  );
}
