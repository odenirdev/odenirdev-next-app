import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
// import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";

export default function Post() {
  //   const router = useRouter();
  //   const { slug } = router.query;

  return (
    <main className="w-full h-screen p-4 space-y-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg">
        <div className="w-full h-44">
          <Image
            width={1920}
            height={1080}
            src="/banner.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-8 py-8 space-y-2">
          <Typography as="h1" className="text-2xl font-bold">
            Título do post
          </Typography>

          <ReactMarkdown>
            Meu 1o Meetup como organizador. Evento que organizamos para 100
            pessoas, poder reencontrar presencialmente meus amigos de [DevJr
            BR](https://www.linkedin.com/company/devjrbr/) e faculdade,
            encontrar uma galera nova que está engajada em TI, poder ver de
            perto palestrantes que são referências para mim. Estava super
            ansioso, tanto que esqueci de falar para o pessoal pegar caderno e
            caneta para anotações, porque vinha muito conteúdo de qualidade pela
            frente. Começamos promovendo vagas da
            [Venturus](https://www.linkedin.com/company/venturus/), patrocinador
            do evento, empresa incrível que presta consultoria em TI para vários
            empresas grandes de diversos segmentos. O [Michel
            Amaral](https://www.linkedin.com/in/ACoAAAjOpKYBlv-e-QaeZECGAcakWMu-cG57nVs),
            CEO da Designa e mentor da DevJr, apresentou vários insights e
            dinâmicas sobre mercado e oportunidades. Principal insight que tive
            foi em relação a oportunidades, aonde precisamos ser ágeis no
            momento que a oportunidade está a nossa frente. O [Paulo
            Luan](https://www.linkedin.com/in/ACoAAAacMeIB_DrQqtmmw63ll8DPWBqIZkitfWY),
            desenvolvedor sênior na [Flatirons
            Development](https://www.linkedin.com/company/flatirons-development/),
            empresa norte americana que também veio anunciar vagas. Paulo
            apresentou sobre os aprendizados que teve durante 2 anos, período
            que mentorou mais de 6 mil devs. Foi uma das melhores apresentações
            sobre carreira que vi e o principal conhecimento passado, que para
            ser torna um dev foda no Brasil e no exterior é preciso ter um
            objetivo traçado e uma vontade ardente. Para finalizar, fizemos um
            tour pela [Escola SENAI Taubaté | SENAI São
            Paulo](https://www.linkedin.com/company/escolasenaitaubate/), que
            concedeu seu espaço para a realização do evento. Instituição de
            ensino maravilhosa, com uma infraestrutura de milhões, uma equipe de
            professores engajada e vários cursos gratuitos envolvendo a área de
            TI. Gostaria de agradecer a todos os envolvidos no evento,
            organizadores, palestrantes, patrocinadores e aos antigos e novos
            membros da DevJr Brasil. Estou ansioso para o próximo! Ficou
            interessado em participar do próximo e ser tornar membro da DevJr
            Brasil, nós siga e fique ligado nas redes sociais. Curta e
            compartilhe esse post para alcançar mais pessoas. 👍✨
            [#meetup](https://www.linkedin.com/feed/hashtag/?keywords=meetup&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6978100578597900288)
            [#comunidade](https://www.linkedin.com/feed/hashtag/?keywords=comunidade&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6978100578597900288)
            [#devjr](https://www.linkedin.com/feed/hashtag/?keywords=devjr&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6978100578597900288)
            [#carreira](https://www.linkedin.com/feed/hashtag/?keywords=carreira&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6978100578597900288)
            [#ti](https://www.linkedin.com/feed/hashtag/?keywords=ti&highlightedUpdateUrns=urn%3Ali%3Aactivity%3A6978100578597900288)
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
