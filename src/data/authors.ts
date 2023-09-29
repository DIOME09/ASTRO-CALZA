export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Diomedes Diaz Rocha",
    slug: "mario-sanchez",
    image: "imgs/diomedes.jpeg",
    bio: "Diomedes is a Staff Engineer nagementhis, he was a Senior Engineer at Apple.",
  },
  {
    name: "Daniela Guzman ",
    slug: "Daniela-Guzman",
    image: "imgs/dany.jpeg",
    bio: "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  {
    name: "jose Ramires",
    slug: "jose-Ramirez",
    image: "imgs/jose.jpeg",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },
  {
    name: "Marcos Daniel Montealegre",
    slug: "erika-oliver",
    image: "imgs/jose.jpeg",
    bio: "Marcos acesor comercial que esta capacitado a resolver toda inquietud con tus compras.",
  },
  {
    name: "Luis Rogelio Patasquiva",
    slug: "erika-oliver",
    image: "imgs/jose.jpeg",
    bio: "Luis acesor comercial que esta capacitado a resolver toda inquietud con tus compras.",
  },
];