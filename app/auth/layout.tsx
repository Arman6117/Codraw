import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-yellow-400">
      <div className="flex h-1/2 w-[60%]" style={{backgroundColor: "rgb(48,55,255)",
background: "linear-gradient(85deg, rgba(48,55,255,1) 0%, rgba(5,13,224,1) 35%, rgba(31,34,126,1) 100%)"}}>{children}</div>
    </div>
  );
};

export default layout;
