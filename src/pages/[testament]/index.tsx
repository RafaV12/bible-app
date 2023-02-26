import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

import { useAppSelector } from '@/hooks/reduxHooks';

import { replaceDashesWithSpaces } from '@/utils/index';

import Loading from '@/components/Loading';
import newTestamentBooks from '@/../bible/new-testament/books.json';
import oldTestamentBooks from '@/../bible/old-testament/books.json';

interface Book {
  title: string;
  content: string[];
}

export default function Testament() {
  const bookmark = useAppSelector((state) => state.bookmark);
  const router = useRouter();
  const { testament } = router.query;

  let data;
  if (testament === 'new-testament') data = newTestamentBooks;
  if (testament === 'old-testament') data = oldTestamentBooks;
  if (data === undefined) return <Loading />;

  return (
    <>
      <Head>
        <title>Bible App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="mb-4 font-semibold text-2xl italic capitalize">{replaceDashesWithSpaces(testament as string)}</h1>
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className="flex flex-col">
        {data?.books.map((book: Book, index) => (
          <figure key={index} className="mb-4">
            <figcaption className="mb-1 underline text-lg">{book.title}</figcaption>
            <ul>
              {book.content.map((item, index) => (
                <li key={index} className="flex items-center">
                  <Link href={`/${testament}/${item.replaceAll(' ', '-').toLowerCase()}`} className="flex items-center">
                    {item}
                    <svg className="mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16 12l-6 6V6z" />
                    </svg>
                  </Link>
                  {bookmark.book === item.replaceAll(' ', '-').toLowerCase() && <i className="fa-solid fa-bookmark text-red-500"></i>}
                </li>
              ))}
            </ul>
          </figure>
        ))}
      </motion.section>
    </>
  );
}
