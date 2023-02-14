// New testament
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

// Old testament
import firstChronicles from '@/../bible/old-testament/1-Chronicles.json';
import secondChronicles from '@/../bible/old-testament/2-Chronicles.json';
import firstKings from '@/../bible/old-testament/1-Kings.json';
import secondKings from '@/../bible/old-testament/2-Kings.json';
import firstSamuel from '@/../bible/old-testament/1-Samuel.json';
import secondSamuel from '@/../bible/old-testament/2-Samuel.json';
import amos from '@/../bible/old-testament/Amos.json';
import daniel from '@/../bible/old-testament/Daniel.json';
import deuteronomy from '@/../bible/old-testament/Deuteronomy.json';
import ecclesiastes from '@/../bible/old-testament/Ecclesiastes.json';
import esther from '@/../bible/old-testament/Esther.json';
import exodus from '@/../bible/old-testament/Exodus.json';
import ezekiel from '@/../bible/old-testament/Ezekiel.json';
import ezra from '@/../bible/old-testament/Ezra.json';
import genesis from '@/../bible/old-testament/Genesis.json';
import habakkuk from '@/../bible/old-testament/Habakkuk.json';
import haggai from '@/../bible/old-testament/Haggai.json';
import hosea from '@/../bible/old-testament/Hosea.json';
import isaiah from '@/../bible/old-testament/Isaiah.json';
import jeremiah from '@/../bible/old-testament/Jeremiah.json';
import job from '@/../bible/old-testament/Job.json';
import joel from '@/../bible/old-testament/Joel.json';
import jonah from '@/../bible/old-testament/Jonah.json';
import joshua from '@/../bible/old-testament/Joshua.json';
import judges from '@/../bible/old-testament/Judges.json';
import lamentations from '@/../bible/old-testament/Lamentations.json';
import leviticus from '@/../bible/old-testament/Leviticus.json';
import malachi from '@/../bible/old-testament/Malachi.json';
import micah from '@/../bible/old-testament/Micah.json';
import nahum from '@/../bible/old-testament/Nahum.json';
import nehemiah from '@/../bible/old-testament/Nehemiah.json';
import numbers from '@/../bible/old-testament/Numbers.json';
import obadiah from '@/../bible/old-testament/Obadiah.json';
import proverbs from '@/../bible/old-testament/Proverbs.json';
import psalms from '@/../bible/old-testament/Psalms.json';
import ruth from '@/../bible/old-testament/Ruth.json';
import songOfSolomon from '@/../bible/old-testament/SongofSolomon.json';
import zechariah from '@/../bible/old-testament/Zechariah.json';
import zephaniah from '@/../bible/old-testament/Zephaniah.json';

import { Book } from '@/types';

export default function useBook(book: string, testament: string) {
  let bookToParse = {} as Book;

  if (testament === 'new-testament') {
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
  } else if (testament === 'old-testament') {
    switch (book) {
      case '1-chronicles':
        bookToParse = firstChronicles;
        break;
      case '2-chronicles':
        bookToParse = secondChronicles;
        break;
      case '1-kings':
        bookToParse = firstKings;
        break;
      case '2-kings':
        bookToParse = secondKings;
        break;
      case '1-samuel':
        bookToParse = firstSamuel;
        break;
      case '2-samuel':
        bookToParse = secondSamuel;
        break;
      case 'amos':
        bookToParse = amos;
        break;
      case 'daniel':
        bookToParse = daniel;
        break;
      case 'deuteronomy':
        bookToParse = deuteronomy;
        break;
      case 'ecclesiastes':
        bookToParse = ecclesiastes;
        break;
      case 'esther':
        bookToParse = esther;
        break;
      case 'exodus':
        bookToParse = exodus;
        break;
      case 'ezekiel':
        bookToParse = ezekiel;
        break;
      case 'ezra':
        bookToParse = ezra;
        break;
      case 'genesis':
        bookToParse = genesis;
        break;
      case 'habakuk':
        bookToParse = habakkuk;
        break;
      case 'haggai':
        bookToParse = haggai;
        break;
      case 'hosea':
        bookToParse = hosea;
        break;
      case 'isaiah':
        bookToParse = isaiah;
        break;
      case 'jeremiah':
        bookToParse = jeremiah;
        break;
      case 'job':
        bookToParse = job;
        break;
      case 'joel':
        bookToParse = joel;
        break;
      case 'jonah':
        bookToParse = jonah;
        break;
      case 'joshua':
        bookToParse = joshua;
        break;
      case 'judges':
        bookToParse = judges;
        break;
      case 'lamentations':
        bookToParse = lamentations;
        break;
      case 'leviticus':
        bookToParse = leviticus;
        break;
      case 'malachi':
        bookToParse = malachi;
        break;
      case 'micah':
        bookToParse = micah;
        break;
      case 'nahum':
        bookToParse = nahum;
        break;
      case 'nehemiah':
        bookToParse = nehemiah;
        break;
      case 'numbers':
        bookToParse = numbers;
        break;
      case 'obadiah':
        bookToParse = obadiah;
        break;
      case 'proverbs':
        bookToParse = proverbs;
        break;
      case 'psalms':
        bookToParse = psalms;
        break;
      case 'ruth':
        bookToParse = ruth;
        break;
      case 'songofsolomon':
        bookToParse = songOfSolomon;
        break;
      case 'zechariah':
        bookToParse = zechariah;
        break;
      case 'zephaniah':
        bookToParse = zephaniah;
        break;

      default:
        break;
    }
  }

  return bookToParse;
}
