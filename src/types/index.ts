export interface Verse {
  verse: string;
  text: string;
}

export interface Chapter {
  chapter: string;
  verses: Verse[];
}

export interface Book {
  book: string;
  numOfChapters: number;
  chapters: Chapter[];
}
