import Image from "next/image";

type Props = {
  products?: {
    image: {
      url: string;
      alt: string;
    };
    title: string;
  }[];
};

const OurProducts: React.FC<Props> = ({ products }) => {
  return (
    <div className="py-24">
      <div className="grid grid-col-1 sm:grid-cols-3 gap-8">
        {products?.map((product, index) => (
          <div
            className="flex flex-col gap-y-4 p-8 bg-gray-200 text-gray-900 justify-center items-center"
            key={index}
          >
            <div className="relative max-w-[200px] w-full aspect-[2/3]">
              <Image
                src={product.image.url}
                alt={product.image.alt}
                layout="fill"
                objectFit="contain"
                objectPosition={"center"}
                className="w-full"
                priority
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold">{product.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
