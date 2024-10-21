import { Typography } from "@/components/atoms/Typography";
import { HeroCard } from "@/components/organisms/HeroCard";
import { ContactModal } from "@/components/templates/ContactModal";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Slider, { Settings as SliderSettings } from "react-slick";

export default function Home() {
  const [openContactModal, setOpenContactModal] = useState(false);

  const handleOpenContactModalChange = (value: boolean) => {
    setOpenContactModal(value);
  };

  const settings: SliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    centerPadding: "64px",
    centerMode: true,
  };

  return (
    <>
      <Head>
        <title>
          Odenir Gomes - Desenvolvedor de software, Programador, Entusiasta de
          educação em tecnologia
        </title>
      </Head>

      <div className="w-full min-h-screen bg-[url('/background.svg')] bg-fixed">
        <main className="p-4 space-y-4">
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
              <Typography as="p">
                👋🏾 Olá, meu nome é Odenir Gomes. É um prazer conhecê-lo!
              </Typography>
              <br />
              <Typography as="p">
                Sou Desenvolvedor de Software com mais de 5 anos de experiência,
                especializado em desenvolvimento web. Tenho uma sólida formação
                em Análise e Desenvolvimento de Sistemas pelo Instituto Federal
                de São Paulo (IFSP) e uma trajetória diversificada, que inclui
                tanto a criação e compartilhamento de conteúdos técnicos na
                plataforma Open-source Courses quanto a atuação como professor
                de lógica de programação na ONG Ampliar.
              </Typography>
              <br />
              <Typography as="p">
                Atualmente, lidero o desenvolvimento de software na Intuix
                Tecnologia, empresa especializada em compliance e auditoria,
                desde fevereiro de 2021. Minhas principais especialidades
                incluem ReactJS, NodeJS, JavaScript e AWS, além de habilidades
                em arquitetura de sistemas e gestão de equipes.
              </Typography>
              <br />
              <Typography as="p">
                💬 Fique à vontade para entrar em contato
              </Typography>
              <Typography as="p">✉️ odenirdev@gmail.com</Typography>
            </section>
          </section>

          <section className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2">
            <Typography as="h2" className="text-xl font-bold">
              Em destaque
            </Typography>

            <section className="hero-carousel">
              <Slider {...settings}>
                <div>
                  <Link href="/post/1" rel="noreferrer">
                    <HeroCard
                      title="Open-source Courses"
                      description="Plataforma opensource de educação em tecnologia"
                      image="/opensource-courses.jpg"
                    />
                  </Link>
                </div>

                <div>
                  <Link href="/post/2" rel="noreferrer">
                    <HeroCard
                      title="Dev Dynamos"
                      description="Equipe de desenvolvedores de software"
                      image="/dev-dynamos.jpg"
                    />
                  </Link>
                </div>
              </Slider>
            </section>
          </section>

          {/* <section className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2">
            <Typography as="h2" className="text-xl font-bold">
              Experiência
            </Typography>
          </section> */}
        </main>

        <footer className="flex justify-center py-4">
          <Typography as="h2" className="text-xs text-gray-400">
            Odenir Gomes Soluções &copy; 2024
          </Typography>
        </footer>
      </div>

      <ContactModal
        open={openContactModal}
        onOpenChange={handleOpenContactModalChange}
      />
    </>
  );
}
