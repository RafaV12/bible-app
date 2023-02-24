import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

import { useFontSizeContext } from '@/context/FontSizeContext';

import { Book } from '@/types';

interface ChaptersProps {
  bookToParse: Book;
  chapter: string;
}

export default function Chapters({ bookToParse, chapter }: ChaptersProps) {
  const { fontSizeContext, fontSizeOptions } = useFontSizeContext();

  return (
    <ul className="flex flex-col gap-y-1">
      <AnimatePresence>
        {bookToParse.chapters
          .find((c) => c.chapter === chapter)
          ?.verses.map((verse) => (
            <motion.li
              key={uuidv4()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontSize: `${fontSizeOptions[fontSizeContext]}`,
              }}
              className="flex"
            >
              <p className='text-slate-900'>
                <span className="mr-2 text-sm text-slate-500 float-left ">{verse.verse}</span>
                {verse.text}
              </p>
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
}
