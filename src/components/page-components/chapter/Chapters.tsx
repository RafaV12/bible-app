import { useFontSizeContext } from '@/context/FontSizeContext';

import { Book } from '@/types';

interface ChaptersProps {
  bookToParse: Book;
  chapter: string;
}

export default function Chapters({ bookToParse, chapter }: ChaptersProps) {
  const { fontSizeContext, fontSizeOptions } = useFontSizeContext();
  return (
    <ul className="flex flex-col">
      {bookToParse.chapters
        .find((c) => c.chapter === chapter)
        ?.verses.map((verse) => (
          <li
            style={{
              fontSize: `${fontSizeOptions[fontSizeContext]}`,
            }}
            key={verse.verse}
            className="flex"
          >
            <span className="mr-2 font-semibold">{verse.verse}</span>
            <p>{verse.text}</p>
          </li>
        ))}
    </ul>
  );
}
