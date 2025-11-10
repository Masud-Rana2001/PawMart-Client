import {forwardRef} from "react";

const Loading =forwardRef( (props,ref) => {
  return (
    <div ref={ref} className="flex flex-col items-center justify-center h-[80vh] text-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-600 font-medium text-lg">Loading...</p>
    </div>
  );
});

export default Loading;
