import Image from "next/image";
import { Typography } from "../atoms/Typography";

type WorkCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
};

export const WorkCard = (props: WorkCardProps) => {
  const { imageUrl, title, description, date } = props;

  return (
    <section className="flex gap-2">
      <Image
        src={imageUrl}
        alt=""
        width={500}
        height={500}
        className="w-16 h-16 object-cover object-center shrink-0"
      />

      <div>
        <Typography as="h3" className="text-lg font-bold">
          {title}
        </Typography>
        <Typography as="p" className="text-sm">
          {description}
        </Typography>
        <Typography as="p" className="text-sm text-zinc-400">
          {date}
        </Typography>
      </div>
    </section>
  );
};
