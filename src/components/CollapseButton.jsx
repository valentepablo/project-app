import { ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';

const CollapseButton = ({ handleCollapsed, collapsed }) => {
  return (
    <ChevronDoubleLeftIcon
      onClick={() => handleCollapsed()}
      className={`${
        collapsed && 'rotate-180'
      } cursor-pointer text-slate-500 bg-white border rounded-full shadow w-8 h-8 p-1.5`}
    />
  );
};

export default CollapseButton;
