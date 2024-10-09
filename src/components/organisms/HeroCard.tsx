import Image from "next/image";
import { Typography } from "../atoms/Typography";
import Link from "next/link";
import { ComponentProps } from "react";

type HeroCardProps = ComponentProps<typeof Link> & {
  title: string;
  description: string;
  image: string;
};

export const HeroCard = (props: HeroCardProps) => {
  const { title, description, image, ...rest } = props;

  return (
    <Link
      {...rest}
      className="block w-72 shadow-sm rounded-2xl overflow-hidden border border-gray-200"
    >
      <Image
        width={256}
        height={144}
        className="h-36 w-full object-contain object-center"
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
    </Link>
  );
};