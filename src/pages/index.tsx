import { Typography } from "@/components/atoms/Typography";
import { ContactModal } from "@/components/templates/ContactModal";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  const handleOpenContactModalChange = (value: boolean) => {
    setOpenContactModal(value);
  };

  return (
    <>
      <Head>
        <title>
          Odenir Gomes - Desenvolvedor de software, Programador, Entusiasta de
          educação em tecnologia
        </title>
      </Head>
      <div>
        <main className="w-full h-screen p-4 space-y-4">
          <header className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-44">
              <Image
                width={1920}
                height={1080}
                src="/banner.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-[-126px] px-8 pb-8 space-y-2">
              <div className="w-44 h-44 rounded-2xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt=""
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <div>
                  <Typography as="h1" className="text-2xl font-bold">
                    Odenir Gomes
                  </Typography>

                  <Typography as="p" className="text-base">
                    Desenvolvedor de software | Programador | Entusiasta de
                    educação em tecnologia
                  </Typography>
                </div>

                <div>
                  <Typography
                    as="span"
                    className="text-sm text-gray-500 after:content-['\00B7'] after:mx-1"
                  >
                    São Paulo, São Paulo, Brasil
                  </Typography>

                  <Link
                    href=""
                    onClick={() => handleOpenContactModalChange(true)}
                  >
                    <Typography as="span">Informações de contato</Typography>
                  </Link>
                </div>
              </div>
            </div>
          </header>

          <section className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2">
            <Typography as="h2" className="text-xl font-bold">
              Sobre
            </Typography>

            <section>
              <Typography as="p">👋🏾 Olá, meu nome é Odenir Gomes.</Typography>
              <br />
              <Typography as="p">
                Sou Desenvolvedor de Software e Entusiasta de Educação em
                Tecnologia, crio conteúdo sobre programação e ajudo iniciantes a
                entrar na área.
              </Typography>
              <br />
              <Typography as="p">
                Escrevo e compartilho artigos por meio da plataforma que criei a
                Open-source Courses. Estudo programação desde 2017, me formei em
                Análise e Desenvolvimento de Sistemas pelo Instituto Federal de
                São Paulo(IFSP). Também, atuei como professor de lógica de
                programação na ONG Ampliar.
              </Typography>
              <br />
              <Typography as="p">
                Atualmente, sou líder no desenvolvimento de software na Intuix
                Tecnologia, empresa especializada em compliance e auditoria.
              </Typography>
              <br />
              <Typography as="p">
                💬 Fique à vontade para entrar em contato
              </Typography>
              <Typography as="p">✉️ odenirdev@gmail.com</Typography>
            </section>
          </section>

          <footer className="flex justify-center py-4">
            <Typography as="h2" className="text-xs text-gray-400">
              Odenir Gomes Soluções &copy; 2024
            </Typography>
          </footer>
        </main>
      </div>

      <ContactModal
        open={openContactModal}
        onOpenChange={handleOpenContactModalChange}
      />
    </>
  );
}
