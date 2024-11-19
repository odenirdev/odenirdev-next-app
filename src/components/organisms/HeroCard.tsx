import Image from "next/image";
import { Typography } from "../atoms/Typography";

type HeroCardProps = {
  title: string;
  description: string;
  image: string;
};

export const HeroCard = (props: HeroCardProps) => {
  const { title, description, image, ...rest } = props;

  return (
    <section
      {...rest}
      className="block shadow-sm rounded-2xl overflow-hidden border border-gray-200 outline-none"
    >
      <Image
        width={524}
        height={1048}
        className="h-64 w-full object-cover object-center"
        src={image}
        alt=""
      />

      <section className="px-4 py-2 space-y-1 border-t border-gray-200">
        <Typography
          as="strong"
          className="text-xs bg-purple-200 text-purple-400 px-1 rounded-sm uppercase tracking-wide"
        >
          Projeto
        </Typography>

        <div>
          <Typography className="text-base font-bold text-gray-800">
            {title}
          </Typography>
          <Typography as="p" className="text-sm text-gray-500">
            {description}
          </Typography>
        </div>
      </section>
    </section>
  );
};
