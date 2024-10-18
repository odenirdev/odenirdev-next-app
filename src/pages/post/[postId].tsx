import { Typography } from "@/components/atoms/Typography";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // Para suporte a tabelas e sintaxe de strikethrough
import remarkHtml from "remark-html";

type PostProps = {
  post: {
    title: string;
    body: string;
  };
};

const Post = ({ post }: PostProps) => {
  const router = useRouter();

  // Exibir uma tela de carregamento durante a construção da página
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

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
          <Typography as="h1" className="text-2xl font-bold leading-loose">
            {post.title}
          </Typography>
          <ReactMarkdown
            remarkPlugins={[remarkGfm, remarkHtml]}
            className="react-markdown" // Use classes do Tailwind para estilizar o conteúdo
          >
            {post.body}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
};

// Fetch the post data using getStaticProps
export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const { postId } = params as { postId: string };
  const res = await fetch(
    `https://api.github.com/repos/odenirdev/odenirdev-next-app/issues/${postId}`
  );

  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const post = await res.json();

  return {
    props: {
      post,
    },
  };
};

// Fetch all paths using getStaticPaths
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    `https://api.github.com/repos/odenirdev/odenirdev-next-app/issues`
  );
  const issues = await res.json();

  const paths = issues.map((issue: { number: number }) => ({
    params: { postId: issue.number.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export default Post;
