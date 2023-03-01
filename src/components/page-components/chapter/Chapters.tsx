import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { useFontSizeContext } from '@/context/FontSizeContext';

import { Book } from '@/types';

interface ChaptersProps {
  bookToParse: Book;
  chapter: string;
}

export default function Chapters({ bookToParse, chapter }: ChaptersProps) {
  const { fontSizeContext, fontSizeOptions } = useFontSizeContext();

  // useEffect(() => {
  //   const onSelection = () => {
  //     console.log(document.getSelection().anchorOffset);
  //     console.log(document.getSelection().focusOffset);
  //   };
  //   document.addEventListener('selectionchange', onSelection);

  //   return () => document.removeEventListener('selectionchange', onSelection);
  // }, []);

  return (
    <ul className="flex flex-col gap-y-1 lg:w-3/4">
      {bookToParse.chapters
        .find((c) => c.chapter === chapter)
        ?.verses.map((verse) => (
          <motion.li
            key={uuidv4()}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: 'easeIn', duration: 0.3 }}
            style={{
              fontSize: `${fontSizeOptions[fontSizeContext]}`,
            }}
            className="flex"
          >
            <p>
              <span className="mr-2 text-sm text-slate-500 float-left ">{verse.verse}</span>
              {verse.text}
            </p>
          </motion.li>
        ))}
    </ul>
  );
}
