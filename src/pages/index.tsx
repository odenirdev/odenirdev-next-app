import { Typography } from "@/components/atoms/Typography";
// import { EducationCard } from "@/components/organisms/EducationCard";
import { HeroCard } from "@/components/organisms/HeroCard";
// import { WorkCard } from "@/components/organisms/WorkCard";
import { ContactModal } from "@/components/templates/ContactModal";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { WorkCard } from "@/components/organisms/WorkCard";
import { EducationCard } from "@/components/organisms/EducationCard";

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

      <div className="w-full min-h-screen bg-[url('/background.svg')] bg-fixed p-8">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4 max-w-4xl mx-auto">
          <aside className="bg-white rounded-2xl overflow-hidden shadow-lg h-fit">
            <div className="w-full h-24">
              <Image
                width={1920}
                height={1080}
                src="/banner.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-[-64px] px-8 pb-8 space-y-2">
              <div className="w-24 h-24 rounded-full overflow-hidden  mx-auto">
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
                  <Typography as="h1" className="text-xl font-bold text-center">
                    Odenir Gomes
                  </Typography>

                  <Typography as="p" className="text-sm">
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
          </aside>

          <main className="space-y-4 max-w-3xl">
            <section className="bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2 w-full">
              <Typography as="h2" className="text-xl font-bold">
                Sobre
              </Typography>

              <section>
                <Typography as="p">
                  👋🏾 Olá, meu nome é Odenir Gomes. É um prazer conhecê-lo!
                </Typography>
                <br />
                <Typography as="p">
                  Sou Desenvolvedor de Software com mais de 5 anos de
                  experiência, especializado em desenvolvimento web. Tenho uma
                  sólida formação em Análise e Desenvolvimento de Sistemas pelo
                  Instituto Federal de São Paulo (IFSP) e uma trajetória
                  diversificada, que inclui tanto a criação e compartilhamento
                  de conteúdos técnicos na plataforma Open-source Courses quanto
                  a atuação como professor de lógica de programação na ONG
                  Ampliar.
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

            <section className="bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2">
              <Typography as="h2" className="text-xl font-bold">
                Em destaque
              </Typography>

              <section className="hero-carousel">
                <Swiper
                  slidesPerView={"auto"}
                  centeredSlides={true}
                  spaceBetween={30}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Link href="/post/1" rel="noreferrer">
                      <HeroCard
                        title="Open-source Courses"
                        description="Plataforma opensource de educação em tecnologia"
                        image="/opensource-courses.jpg"
                      />
                    </Link>
                  </SwiperSlide>

                  <SwiperSlide>
                    <Link href="/post/1" rel="noreferrer">
                      <HeroCard
                        title="Open-source Courses"
                        description="Plataforma opensource de educação em tecnologia"
                        image="/opensource-courses.jpg"
                      />
                    </Link>
                  </SwiperSlide>
                </Swiper>
              </section>
            </section>

            <section className="bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2">
              <Typography as="h2" className="text-xl font-bold">
                Experiência
              </Typography>

              <section>
                <ul className="space-y-4">
                  <li>
                    <WorkCard
                      imageUrl="https://media.licdn.com/dms/image/v2/D4D0BAQEd6wCcwXKrfw/company-logo_100_100/company-logo_100_100/0/1706902486703/intuix_tecnologia_logo?e=1738800000&v=beta&t=DuK3Luvbr40EKW4MwS9TSmGSFOHdWg-oFabHBfoeOQQ"
                      title="Desenvolvedor de software (ReactJS, NodeJS)"
                      description="Intuix Tecnologia · Tempo integral"
                      date="fev de 2021 - o momento"
                    />
                  </li>

                  <li>
                    <WorkCard
                      imageUrl="https://media.licdn.com/dms/image/v2/C4D0BAQGxsisJbAVhcw/company-logo_100_100/company-logo_100_100/0/1638361014046/projetoampliar_logo?e=1738800000&v=beta&t=qYMTbfv9OUBELl9sN8OkkXllVOSu6ZrDnOVqTn6CTlg"
                      title="Professor de lógica de programação"
                      description="Projeto Ampliar · Freelance"
                      date="out de 2021 - mar de 2022"
                    />
                  </li>

                  <li>
                    <WorkCard
                      imageUrl="https://media.licdn.com/dms/image/v2/C4E0BAQGYRPx8CtfkNA/company-logo_100_100/company-logo_100_100/0/1631321072881?e=1738800000&v=beta&t=ypHdubJ58WXpWfQi4YjfAhL2IkS4FthArTplpVC8CNE"
                      title="Desenvolver de software (ReactJS, NodeJS)"
                      description="SVS Informática · Terceirizado"
                      date="mar de 2020 - fev de 2021"
                    />
                  </li>

                  <li>
                    <WorkCard
                      imageUrl="https://media.licdn.com/dms/image/v2/D4D0BAQFVvGji7z0Ecg/company-logo_100_100/company-logo_100_100/0/1695233775603/memocashsolucoes_logo?e=1738800000&v=beta&t=zJQUUr_Vco5xxeuKrnhEms2ktoz3z4_BIpEifNsJW7Q"
                      title="Desenvolvedor de software (PHP)"
                      description="MemoCash Soluções · Estágio"
                      date="jun de 2019 - fev de 2020"
                    />
                  </li>
                </ul>
              </section>
            </section>

            <section className="bg-white rounded-2xl overflow-hidden shadow-lg px-8 py-6 space-y-2">
              <Typography as="h2" className="text-xl font-bold">
                Formação acadêmica
              </Typography>

              <section>
                <ul className="space-y-4">
                  <li>
                    <EducationCard
                      imageUrl="https://media.licdn.com/dms/image/v2/C560BAQETQJlgswgptg/company-logo_100_100/company-logo_100_100/0/1630614053046/instituto_federal_de_educao_cincia_e_tecnologia_de_so_paulo___ifsp_logo?e=1738800000&v=beta&t=ZkQwDrAvYce_5T0lwt6-RuBW1LxIkqTLbEQst36yrjo"
                      title="Instituto Federal de Educação, Ciência e Tecnologia de São Paulo - IFSP"
                      description="Tecnologo, Análise e Desenvolvimento de Sistemas"
                      date="Jul de 2017 - Jul de 2021"
                    />
                  </li>
                  <li>
                    <EducationCard
                      imageUrl="https://media.licdn.com/dms/image/v2/D4D0BAQEN1HECc9Z0iw/company-logo_100_100/company-logo_100_100/0/1730138057635/rocketseat_logo?e=1738800000&v=beta&t=QpgSCryY-sqdoQYVoVpmbsi0c6FqxQKDFjeH0m5qt6I"
                      title="Rocketseat"
                      description="Bolsista, Desenvolvimento Web"
                      date="fev de 2022 - fev de 2023"
                    />
                  </li>
                </ul>
              </section>
            </section>
          </main>
        </div>

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
