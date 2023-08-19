import { FC } from 'react';

interface ArticleProps {
  articleBody: {
    title: string;
    text: string[];
  };
}

const Article: FC<ArticleProps> = ({ articleBody }) => (
  <div>
    {articleBody.text.map((text, idx) => (
      <p
        key={idx}
        className="my-5 px-4 2xl:text-[1.5rem] xl:text-[1.25rem] lg:text-[1.125rem] md:text-[1rem] text-[0.875rem]"
      >
        {text}
      </p>
    ))}
  </div>
);

export default Article;
