import { ComponentProps } from "react";
import { Dialog } from "../molecules/Dialog";
import { Typography } from "../atoms/Typography";
import {
  Envelope,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

type ContactModalProps = ComponentProps<typeof Dialog.Root>;

export const ContactModal = (props: ContactModalProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Portal>
        <Dialog.Overlay />

        <Dialog.Content className="space-y-4 max-w-xl">
          <header className="flex items-center justify-between border-b pb-3">
            <Dialog.Title className="text-2xl">Odenir Gomes</Dialog.Title>

            <Dialog.Close />
          </header>

          <section className="space-y-4">
            <Typography as="h2" className="text-2xl font-thin">
              Informações de contato
            </Typography>

            <ul className="space-y-4">
              <li className="flex gap-2">
                <Envelope size={24} />

                <div className="flex flex-col">
                  <Typography as="span" className="text-sm">
                    E-mail
                  </Typography>
                  <a
                    href="mailto:odenirdev@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography as="span">odenirdev@gmail.com</Typography>
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <LinkedinLogo size={24} />

                <div className="flex flex-col">
                  <Typography as="span" className="text-sm">
                    Linkedin
                  </Typography>
                  <a
                    href="https://www.linkedin.com/in/odenirdev/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography as="span">linkedin.com/in/odenirdev</Typography>
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <GithubLogo size={24} />

                <div className="flex flex-col">
                  <Typography as="span" className="text-sm">
                    Github
                  </Typography>
                  <a
                    href="https://github.com/odenirdev"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography as="span">github.com/odenirdev</Typography>
                  </a>
                </div>
              </li>
              <li className="flex gap-2">
                <Image
                  src="/lattes-icon.png"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] object-contain shrink-0"
                  alt="Lattes"
                />

                <div className="flex flex-col">
                  <Typography as="span" className="text-sm">
                    Currículo Lattes
                  </Typography>
                  <a
                    href="http://lattes.cnpq.br/9020948665613326"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Typography as="span">
                      lattes.cnpq.br/9020948665613326
                    </Typography>
                  </a>
                </div>
              </li>
            </ul>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
