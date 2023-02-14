import matthew from '@/../bible/new-testament/matthew.json';
import mark from '@/../bible/new-testament/mark.json';
import luke from '@/../bible/new-testament/luke.json';
import john from '@/../bible/new-testament/john.json';
import acts from '@/../bible/new-testament/acts.json';
import romans from '@/../bible/new-testament/romans.json';
import firstCorinthians from '@/../bible/new-testament/1-corinthians.json';
import secondCorinthians from '@/../bible/new-testament/2-corinthians.json';
import galatians from '@/../bible/new-testament/galatians.json';
import ephesians from '@/../bible/new-testament/ephesians.json';
import philippians from '@/../bible/new-testament/philippians.json';
import colossians from '@/../bible/new-testament/colossians.json';
import firstThessalonians from '@/../bible/new-testament/1-thessalonians.json';
import secondThessalonians from '@/../bible/new-testament/2-thessalonians.json';
import firstTimothy from '@/../bible/new-testament/1-timothy.json';
import secondTimothy from '@/../bible/new-testament/2-timothy.json';
import titus from '@/../bible/new-testament/titus.json';
import philemon from '@/../bible/new-testament/philemon.json';
import hebrews from '@/../bible/new-testament/hebrews.json';
import james from '@/../bible/new-testament/james.json';
import firstPeter from '@/../bible/new-testament/1-peter.json';
import secondPeter from '@/../bible/new-testament/2-peter.json';
import firstJohn from '@/../bible/new-testament/1-john.json';
import secondJohn from '@/../bible/new-testament/2-john.json';
import thirdJohn from '@/../bible/new-testament/3-john.json';
import jude from '@/../bible/new-testament/jude.json';
import revelation from '@/../bible/new-testament/revelation.json';

import { Book } from '@/types';

export default function useBook(book: string) {
  let bookToParse = {} as Book;

  switch (book) {
    case 'matthew':
      bookToParse = matthew;
      break;
    case 'mark':
      bookToParse = mark;
      break;
    case 'luke':
      bookToParse = luke;
      break;
    case 'john':
      bookToParse = john;
      break;
    case 'acts':
      bookToParse = acts;
      break;
    case 'romans':
      bookToParse = romans;
      break;
    case '1-corinthians':
      bookToParse = firstCorinthians;
      break;
    case '2-corinthians':
      bookToParse = secondCorinthians;
      break;
    case 'galatians':
      bookToParse = galatians;
      break;
    case 'ephesians':
      bookToParse = ephesians;
      break;
    case 'philippians':
      bookToParse = philippians;
      break;
    case 'colossians':
      bookToParse = colossians;
      break;
    case '1-thessalonians':
      bookToParse = firstThessalonians;
      break;
    case '2-thessalonians':
      bookToParse = secondThessalonians;
      break;
    case '1-timothy':
      bookToParse = firstTimothy;
      break;
    case '2-timothy':
      bookToParse = secondTimothy;
      break;
    case 'titus':
      bookToParse = titus;
      break;
    case 'philemon':
      bookToParse = philemon;
      break;
    case 'hebrews':
      bookToParse = hebrews;
      break;
    case 'james':
      bookToParse = james;
      break;
    case '1-peter':
      bookToParse = firstPeter;
      break;
    case '2-peter':
      bookToParse = secondPeter;
      break;
    case '1-john':
      bookToParse = firstJohn;
      break;
    case '2-john':
      bookToParse = secondJohn;
      break;
    case '3-john':
      bookToParse = thirdJohn;
      break;
    case 'jude':
      bookToParse = jude;
      break;
    case 'revelation':
      bookToParse = revelation;
      break;

    default:
      break;
  }

  return bookToParse;
}
