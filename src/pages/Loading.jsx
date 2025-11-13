import { forwardRef, useMemo } from "react";

const Loading = forwardRef((props, ref) => {
  // বিভিন্ন লোডিং মেসেজ
  const messages = [
    "Please wait a moment, loading data...",
    "Fetching something awesome for you 🐾",
    "Almost there, just a few seconds...",
    "Preparing everything perfectly...",
    "Fetching cute pets for you 🐶🐱",
    "Hang tight! Your content is on the way 🚀",
  ];

  // প্রতিবার কম্পোনেন্ট রেন্ডার হলে একটি র‍্যান্ডম মেসেজ
  const randomMessage = useMemo(() => {
    const index = Math.floor(Math.random() * messages.length);
    return messages[index];
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-center h-[80vh] text-center"
    >
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-600 font-medium text-lg">{randomMessage}</p>
    </div>
  );
});

export default Loading;
