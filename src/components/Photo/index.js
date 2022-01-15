import { forwardRef } from "react";
import Image from "next/image";

const SelectedPhoto = forwardRef(({ result }, ref) => {
  const src = result.img_src;
  return (
    <div ref={ref} className="group transition duration-200 ease-in transform">
      <Image
        layout="responsive"
        src={src}
        height={500}
        width={1920}
        objectFit="cover"
      />
      <div className="p-2">
        <h2 className="my-1 text-m text-white tracking-wider">Rover name</h2>
        <h2 className="my-1 text-xl text-white tracking-wider font-bold">
          {result.rover.name}
        </h2>
        <h2 className="pt-2 my-1 text-m text-white tracking-wider">
          Launch Date
        </h2>
        <h2 className="my-1 text-xl text-white tracking-wider font-bold">
          {result.rover.launch_date}
        </h2>
        <h2 className="pt-2 my-1 text-m text-white tracking-wider">
          Landing Date
        </h2>
        <h2 className="my-1 text-xl text-white tracking-wider font-bold">
          {result.rover.landing_date}
        </h2>
        <h2 className="pt-2 my-1 text-m text-white tracking-wider">
          Camera Name
        </h2>
        <h2 className="my-1 text-xl text-white tracking-wider font-bold">
          {result.camera.full_name}
        </h2>
      </div>
    </div>
  );
});

export default SelectedPhoto;
