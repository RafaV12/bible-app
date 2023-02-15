import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useBook from '@/hooks/useBook';
import { useState } from 'react';

export default function Chapter() {
  const router = useRouter();
  const { testament, book, chapter } = router.query;
  const FontSizeOptions: { [key: string]: number } = {
    // sizes in px
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24,
  };
  const [fontSize, setFontSize] = useState<string>('md');
  const bookToParse = useBook(book as string, testament as string);

  const changeFontSize = () => {
    switch (fontSize) {
      case 'sm':
        setFontSize('md');
        break;
      case 'md':
        setFontSize('lg');
        break;
      case 'lg':
        setFontSize('xl');
        break;
      case 'xl':
        setFontSize('sm');
        break;
      default:
        break;
    }
  };

  const isFirstChapter = chapter === '1';
  const isLastChapter = Number(chapter) === bookToParse.numOfChapters;
  const prevChapter = () => !isFirstChapter && router.push(`/${testament}/${book}/${Number(chapter) - 1}`);
  const nextChapter = () => !isLastChapter && router.push(`/${testament}/${book}/${Number(chapter) + 1}`);

  if (chapter === undefined || bookToParse === undefined) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Bible App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav bar */}
      <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 px-4 w-full h-14 flex items-center justify-between bg-white shadow-2xl border-t border-slate-50">
        <div className="flex items-center gap-x-4">
          {/* Previous chapter */}
          <button
            onClick={prevChapter}
            disabled={isFirstChapter}
            className="py-1 px-2 border text-slate-400 bg-white rounded-lg disabled:bg-slate-50"
          >
            &lt;
          </button>

          {/* Home */}
          <Link href={`/${testament}`}>
            <i className="fa-solid fa-book-bible text-2xl text-blue-400 "></i>
          </Link>
        </div>

        <Link
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-white shadow-md rounded-lg border-t"
          href={`/${testament}/${book}`}
        >{`${bookToParse.book} : ${chapter}`}</Link>

        <div className="flex items-center gap-x-4">
          {/* Tool box */}
          <div>
            <button onClick={changeFontSize} className="px-2 py-1 border bg-white rounded-lg">
              Aa
            </button>
          </div>

          {/* Next chapter */}
          <button
            onClick={nextChapter}
            disabled={isLastChapter}
            className="px-2 py-1 border text-slate-400 bg-white rounded-lg disabled:bg-slate-50"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* chapters container */}
      <ul className="flex flex-col">
        {bookToParse.chapters
          .find((c) => c.chapter === chapter)
          ?.verses.map((verse) => (
            <li
              style={{
                fontSize: `${FontSizeOptions[fontSize]}px`,
              }}
              key={verse.verse}
              className="flex text-2xl"
            >
              <span className="mr-2 font-semibold">{verse.verse}</span>
              <p>{verse.text}</p>
            </li>
          ))}
      </ul>
    </>
  );
}