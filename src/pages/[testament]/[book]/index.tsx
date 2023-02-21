import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import useBook from '@/hooks/useBook';
import { useAppSelector } from '@/hooks/reduxHooks';

export default function Chapters() {
  const bookmark = useAppSelector((state) => state.bookmark);
  const router = useRouter();
  const { book, testament } = router.query;
  const bookToParse = useBook(book as string, testament as string);

  if (bookToParse === undefined) return <>Loading...</>;

  return (
    <>
      <Head>
        <title>Bible App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="w-full h-12 flex items-center justify-center font-semibold text-lg">{bookToParse.book}</h1>
      <section className="container flex flex-col items-start gap-y-4">
        {bookToParse.chapters?.map(({ chapter, verses }) => (
          <Link key={chapter} href={`/${testament}/${book}/${chapter}`} className="h-full flex items-center">
            <div>
              <p className="font-semibold underline">Chapter {chapter}</p>
              <p>{`${verses.length} verses`}</p>
            </div>
            <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M16 12l-6 6V6z" />
            </svg>

            {bookmark.bookmarked && bookmark.bookmarkedChapter.chapter === chapter && (
              <i className="ml-2 fa-solid fa-bookmark text-red-500"></i>
            )}
          </Link>
        ))}
      </section>
    </>
  );
}
