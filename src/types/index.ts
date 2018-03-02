export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
}

export interface FlickrItemImage {
  author: string,
  author_id: string,
  date_taken: string,
  /** This HTML as string so use in __html */
  description: string,
  link: string,
  media: {
    /** This is the image we need */
    m: string,
  },
  published: string,
  title: string,
  tags: string
}