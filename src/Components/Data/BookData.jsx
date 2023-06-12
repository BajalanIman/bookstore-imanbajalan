const BookData = [
  {
    id: 1,
    category: "Fiction",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRafRoXCqE9ZuzePJIQ9aoNxtuKCuvHu7pSu9hdMCvdU62dGZh0aYoz6P-I4w7AIgRhv0w&usqp=CAU",
    books: [
      {
        id: 1,
        name: "To Kill a Mockingbird",
        price: 10.99,
        ISBN: "9780061120084",
        year: 1960,
        author: "Harper Lee",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrmLnSWa7PjTOOTmSG4xkzNKnQ4xKnWOPEMBvBYrVpyv4U6HclEUqjRmeCx6Hqc77vrbQ&usqp=CAU",
        description:
          "A classic novel set in the 1930s that explores racial injustice in a small Southern town.",
      },
      {
        id: 2,
        name: "Pride and Prejudice",
        price: 12.5,
        ISBN: "9780141439518",
        year: 1813,
        author: "Jane Austen",
        image:
          "data:image/jpeg;base64,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",
        description:
          "A witty romance novel set in early 19th-century England, following the lives of the Bennet sisters.",
      },
      {
        id: 3,
        name: "The Great Gatsby",
        price: 9.99,
        ISBN: "9780743273565",
        year: 1925,
        author: "F. Scott Fitzgerald",
        image:
          "data:image/jpeg;base64,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",
        description:
          "A tale of love, wealth, and tragedy set in the Roaring Twenties, capturing the essence of the American Dream.",
      },
      {
        id: 4,
        name: "1984",
        price: 11.99,
        ISBN: "9780451524935",
        year: 1949,
        author: "George Orwell",
        image:
          "https://i.pinimg.com/originals/0d/2c/09/0d2c0915b3c86c8ac0680f3f6c88731d.jpg",
        description:
          "A dystopian novel set in a totalitarian society where independent thinking is brutally suppressed.",
      },
      {
        id: 5,
        name: "The Catcher in the Rye",
        price: 10.5,
        ISBN: "9780316769174",
        year: 1951,
        author: "J.D. Salinger",
        image:
          "https://cdn.shopify.com/s/files/1/0605/4293/products/BOOK126-A_1200x1200.progressive.jpg?v=1653408808",
        description:
          "A coming-of-age story that follows the misadventures of Holden Caulfield in New York City.",
      },
      {
        id: 6,
        name: "To the Lighthouse",
        price: 13.99,
        ISBN: "9780156907392",
        year: 1927,
        author: "Virginia Woolf",
        image: "https://m.media-amazon.com/images/I/51uTxSbMjDL.jpg",
        description:
          "An experimental novel that explores the inner lives of characters through stream-of-consciousness narrative.",
      },
      {
        id: 7,
        name: "The Lord of the Rings",
        price: 29.99,
        ISBN: "9780544003415",
        year: 1954,
        author: "J.R.R. Tolkien",
        image:
          "https://www.bigw.com.au/medias/sys_master/images/images/h22/hbc/33132995510302.jpg",
        description:
          "An epic fantasy trilogy that follows the journey of a group of characters to destroy a powerful ring and save Middle-earth.",
      },
      {
        id: 8,
        name: "The Hobbit",
        price: 14.99,
        ISBN: "9780618260300",
        year: 1937,
        author: "J.R.R. Tolkien",
        image:
          "https://m.media-amazon.com/images/I/71k--OLmZKL._AC_UF894,1000_QL80_.jpg",
        description:
          'A fantasy adventure novel set in a prequel to "The Lord of the Rings," narrating Bilbo Baggins\' quest for treasure.',
      },
      {
        id: 9,
        name: "The Odyssey",
        price: 8.75,
        ISBN: "9780143039952",
        year: 8,
        author: "Homer",
        image:
          "https://m.media-amazon.com/images/I/91BG7cc2lWL._AC_UF1000,1000_QL80_.jpg",
        description:
          "An ancient Greek epic poem that recounts the adventures of Odysseus during his journey back home after the Trojan War.",
      },
      {
        id: 10,
        name: "Don Quixote",
        price: 18.95,
        ISBN: "9780060934347",
        year: 1605,
        author: "Miguel de Cervantes",
        image: "https://m.media-amazon.com/images/I/911kj2MkQGL._AC_UY218_.jpg",
        description:
          "A satirical novel that follows the adventures of an elderly knight who sets out to revive chivalry.",
      },
      {
        id: 11,
        name: "Frankenstein",
        price: 9.25,
        ISBN: "9780141439471",
        year: 1818,
        author: "Mary Shelley",
        image: "https://m.media-amazon.com/images/I/51uCLiZlb1L._AC_UY218_.jpg",
        description:
          "A Gothic horror novel that explores the ethical implications of creating artificial life.",
      },
      {
        id: 12,
        name: "Wuthering Heights",
        price: 7.99,
        ISBN: "9780141439556",
        year: 1847,
        author: "Emily Brontë",
        image:
          "https://m.media-amazon.com/images/I/617bYgCOiKL._AC_UF894,1000_QL80_.jpg",
        description:
          "A dark and passionate tale of love and revenge set on the Yorkshire moors.",
      },
      {
        id: 13,
        name: "The Scarlet Letter",
        price: 9.95,
        ISBN: "9780486280486",
        year: 1850,
        author: "Nathaniel Hawthorne",
        image:
          "https://themarblefaunbooksandgifts.com/cdn/shop/products/Scarlet_A_new_bookcover_magnet_081618.jpg?v=1571638550",
        description:
          "A novel set in 17th-century Puritan Boston, exploring themes of sin, guilt, and redemption.",
      },
      {
        id: 14,
        name: "Moby-Dick",
        price: 14.5,
        ISBN: "9780142437247",
        year: 1851,
        author: "Herman Melville",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAok8_muX8A9Zulc1d7tHN0SW9eii2v67Dk7KkYVxaokshrvQr-ubIxhVmxY20wcQkH8c&usqp=CAU",
        description:
          "A tale of obsession and revenge as Captain Ahab pursues the elusive white whale.",
      },
      {
        id: 15,
        name: "The Alchemist",
        price: 9.95,
        ISBN: "9780061122415",
        year: 1988,
        author: "Paulo Coelho",
        image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL.jpg",
        description:
          "A philosophical novel that follows the journey of an Andalusian shepherd boy in search of his personal legend.",
      },
      {
        id: 16,
        name: "Brave New World",
        price: 11.25,
        ISBN: "9780060850524",
        year: 1932,
        author: "Aldous Huxley",
        image:
          "https://dwcp78yw3i6ob.cloudfront.net/wp-content/uploads/2016/12/12111228/BraveNewWorld1946HiRes_Reduced.jpg",
        description:
          "A dystopian novel that presents a future society where technology, conformity, and pleasure reign supreme.",
      },
      {
        id: 17,
        name: "The Kite Runner",
        price: 13.99,
        ISBN: "9781594631931",
        year: 2003,
        author: "Khaled Hosseini",
        image:
          "https://litvox.com/wp-content/uploads/2021/08/Khaled-Hosseini-The-Kite-Runner.jpg",
        description:
          "A novel that tells the story of Amir, a young boy from Afghanistan, and his journey to confront his past.",
      },
      {
        id: 18,
        name: "Gone with the Wind",
        price: 15.75,
        ISBN: "9781451635621",
        year: 1936,
        author: "Margaret Mitchell",
        image: "https://nutfreenerd.files.wordpress.com/2016/07/18405.jpg",
        description:
          "A historical novel set during the American Civil War and Reconstruction era, focusing on the life of Scarlett O'Hara.",
      },
      {
        id: 19,
        name: "The Dragon Tattoo",
        price: 12.99,
        ISBN: "9780307949486",
        year: 2005,
        author: "Stieg Larsson",
        image:
          "https://cdn.shopify.com/s/files/1/2789/4914/products/buy-the-girl-with-the-dragon-tattoo-millennium-1-book-online-at-low-books-bookish-santa-9781847245458-13574780420229.jpg?v=1590723547",
        description:
          "A gripping psychological thriller that follows a journalist and a computer hacker as they investigate a decades-old disappearance.",
      },
      {
        id: 20,
        name: "The Picture of Dorian Gray",
        price: 9.75,
        ISBN: "9780141439570",
        year: 1890,
        author: "Oscar Wilde",
        image:
          "https://images-na.ssl-images-amazon.com/images/I/91luhSxt+5L._AC_UL210_SR210,210_.jpg",
        description:
          "A novel that explores the pursuit of pleasure and the consequences of moral corruption.",
      },
    ],
  },
  {
    id: 2,
    category: "Mystery",
    image: "https://m.media-amazon.com/images/I/41AiWNjwV-S.jpg",
    books: [
      {
        id: 1,
        name: "The Girl on the Train",
        price: 9.99,
        ISBN: "9781594634024",
        year: 2015,
        author: "Paula Hawkins",
        image:
          "https://m.media-amazon.com/images/I/8183Y1myPvL._AC_UF894,1000_QL80_.jpg",
        description:
          "A psychological thriller about a woman who becomes entangled in a missing person investigation.",
      },
      {
        id: 2,
        name: "Gone Girl",
        price: 12.5,
        ISBN: "9780307588371",
        year: 2012,
        author: "Gillian Flynn",
        image:
          "https://images.thalia.media/-/BF2000-2000/c428a89ed86b46d0b63bf85e2c036011/gone-girl-taschenbuch-gillian-flynn-englisch.jpeg",
        description:
          "A gripping novel about a wife's disappearance and the husband who becomes the prime suspect.",
      },
      {
        id: 3,
        name: "The Da Vinci Code",
        price: 11.99,
        ISBN: "9780307474278",
        year: 2003,
        author: "Dan Brown",
        image: "https://i.ebayimg.com/images/g/7tMAAOSwE0VhbX7L/s-l400.jpg",
        description:
          "A fast-paced thriller that follows a symbologist as he unravels a secret society and a hidden religious mystery.",
      },
      {
        id: 4,
        name: "And Then There Were None",
        price: 8.99,
        ISBN: "9780062073488",
        year: 1939,
        author: "Agatha Christie",
        image:
          "https://m.media-amazon.com/images/I/81B9LhCS2AL._AC_UF894,1000_QL80_.jpg",
        description:
          "A classic murder mystery in which ten strangers are trapped on an isolated island and forced to confront their dark secrets.",
      },
      {
        id: 5,
        name: "The Silent Patient",
        price: 10.5,
        ISBN: "9781250301697",
        year: 2019,
        author: "Alex Michaelides",
        image:
          "https://m.media-amazon.com/images/I/81dkqO5LAQL._AC_UF894,1000_QL80_.jpg",
        description:
          "A psychological thriller about a famous painter who stops speaking after she allegedly murders her husband.",
      },
      {
        id: 6,
        name: "The Cuckoo's Calling",
        price: 13.99,
        ISBN: "9780316206853",
        year: 2013,
        author: "Robert Galbraith (J.K. Rowling)",
        image:
          "https://m.media-amazon.com/images/I/81C0ibUZYyL._AC_UF894,1000_QL80_.jpg",
        description:
          "The first book in a detective series following private investigator Cormoran Strike as he investigates a supermodel's mysterious death.",
      },
      {
        id: 7,
        name: "In the Woods",
        price: 11.99,
        ISBN: "9780143113492",
        year: 2007,
        author: "Tana French",
        image:
          "https://m.media-amazon.com/images/I/51XDNin3-RL._AC_UF894,1000_QL80_.jpg",
        description:
          "A gripping mystery about a detective investigating the murder of a young girl, while grappling with his own haunted past.",
      },
      {
        id: 8,
        name: "Big Little Lies",
        price: 14.99,
        ISBN: "9780425274866",
        year: 2014,
        author: "Liane Moriarty",
        image:
          "data:image/jpeg;base64,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",
        description:
          "A suspenseful novel set in a seemingly idyllic seaside town, where secrets and lies unravel after a tragic incident.",
      },
      {
        id: 9,
        name: "The No. 1 Ladies' Detective Agency",
        price: 9.95,
        ISBN: "9780349116754",
        year: 1998,
        author: "Alexander McCall Smith",
        image:
          "https://m.media-amazon.com/images/I/91l5Osjt3rL._AC_UF894,1000_QL80_.jpg",
        description:
          "The first book in a series featuring Precious Ramotswe, Botswana's first female private detective.",
      },
      {
        id: 10,
        name: "The Hound of the Baskervilles",
        price: 7.99,
        ISBN: "9780553212426",
        year: 1902,
        author: "Arthur Conan Doyle",
        image:
          "https://kbimages1-a.akamaihd.net/5ef5630f-8711-48b5-8a7d-11bcbf95e2f9/1200/1200/False/the-hound-of-the-baskervilles-17.jpg",
        description:
          "A Sherlock Holmes mystery in which the detective investigates a curse haunting the Baskerville family.",
      },
      {
        id: 11,
        name: "The Secret History",
        price: 12.95,
        ISBN: "9781400031702",
        year: 1992,
        author: "Donna Tartt",
        image:
          "data:image/png;base64,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",
        description:
          "A psychological thriller about a group of students at an elite college whose lives are forever changed by a murder.",
      },
      {
        id: 12,
        name: "The Girl",
        price: 9.99,
        ISBN: "9780307454546",
        year: 2005,
        author: "Stieg Larsson",
        image: "https://pictures.abebooks.com/isbn/9781849162883-de.jpg",
        description:
          "A gripping crime novel that follows a journalist and a troubled hacker as they investigate a decades-old disappearance.",
      },
      {
        id: 13,
        name: "The Snowman",
        price: 8.75,
        ISBN: "9780307742995",
        year: 2007,
        author: "Jo Nesbø",
        image:
          "https://images.thalia.media/-/BF2000-2000/8024429874024c33b16320fbf6a2b975/the-snowman-35th-anniversary-edition-taschenbuch-raymond-briggs-englisch.jpeg",
        description:
          'A chilling thriller featuring detective Harry Hole as he hunts for a serial killer known as "The Snowman."',
      },
      {
        id: 14,
        name: "In Cold Blood",
        price: 10.99,
        ISBN: "9780679745587",
        year: 1966,
        author: "Truman Capote",
        image: "https://pictures.abebooks.com/isbn/9780375507908-uk.jpg",
        description:
          "A true crime novel that reconstructs the murder of a Kansas family and the subsequent investigation.",
      },
      {
        id: 15,
        name: "The Thirteenth Tale",
        price: 9.99,
        ISBN: "9780743298025",
        year: 2006,
        author: "Diane Setterfield",
        image: "https://infinitereads.files.wordpress.com/2013/11/bellman.jpg",
        description:
          "A haunting story about a biographer who uncovers dark family secrets while researching a famous author.",
      },
      {
        id: 16,
        name: "The Bourne Identity",
        price: 8.99,
        ISBN: "9780553593549",
        year: 1980,
        author: "Robert Ludlum",
        image:
          "https://m.media-amazon.com/images/I/51MXMhVR3rL._AC_UF894,1000_QL80_.jpg",
        description:
          "An action-packed thriller that introduces Jason Bourne, a man suffering from amnesia and hunted by assassins.",
      },
      {
        id: 17,
        name: "The Maltese Falcon",
        price: 10.5,
        ISBN: "9780679722649",
        year: 1930,
        author: "Dashiell Hammett",
        image:
          "https://images-eu.ssl-images-amazon.com/images/I/918mIOpYzmL._AC_UL600_SR600,600_.jpg",
        description:
          "A classic hard-boiled detective novel featuring private investigator Sam Spade and a quest for a priceless statuette.",
      },
      {
        id: 18,
        name: "The Secret Adversary",
        price: 7.99,
        ISBN: "9780008134930",
        year: 1922,
        author: "Agatha Christie",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdHpBmqiLvt6PK2p4zN3Wer141WLMvqBGEA&usqp=CAU",
        description:
          "The first novel in the Tommy and Tuppence series, in which the young duo tackles espionage and mystery.",
      },
      {
        id: 19,
        name: "The Name of the Rose",
        price: 13.99,
        ISBN: "9780544176560",
        year: 1980,
        author: "Umberto Eco",
        image:
          "https://m.media-amazon.com/images/I/81SXPDPFRbL._AC_UF894,1000_QL80_.jpg",
        description:
          "A historical murder mystery set in an Italian monastery, where a series of deaths puzzle the Franciscan friars.",
      },
      {
        id: 20,
        name: "The Adventures of Sherlock Holmes",
        price: 9.95,
        ISBN: "9780143117025",
        year: 1892,
        author: "Arthur Conan Doyle",
        image:
          "https://kbimages1-a.akamaihd.net/15bee909-5e30-4dc2-987c-70a45d88baa2/1200/1200/False/the-great-adventures-of-sherlock-holmes-1.jpg",
        description:
          "A collection of twelve short stories featuring the legendary detective Sherlock Holmes and his loyal companion Dr. John Watson.",
      },
    ],
  },
  {
    id: 3,
    category: "Thriller",
    image:
      "https://m.media-amazon.com/images/I/41mPrMWHx6S._SY264_BO1,204,203,200_QL40_ML2_.jpg",
    books: [
      {
        id: 1,
        name: "Gone Girl",
        price: 10.99,
        ISBN: "9780307588371",
        year: 2012,
        author: "Gillian Flynn",
        image:
          "data:image/jpeg;base64,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",
        description:
          "A psychological thriller about a wife who goes missing on her fifth wedding anniversary, with her husband becoming the prime suspect.",
      },
      {
        id: 2,
        name: "The Girl on the Train",
        price: 9.99,
        ISBN: "9781594633669",
        year: 2015,
        author: "Paula Hawkins",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpKfwmoSqpFT1wLDuldR2nhQod_KqNMnKXBBowe542Q4Jaa-H0ZtjLJbEGWIO6UeoHYGw&usqp=CAU",
        description:
          "A gripping story of a woman who becomes entangled in a missing persons investigation after witnessing something shocking during her daily train commute.",
      },
      {
        id: 3,
        name: "The Da Vinci Code",
        price: 8.99,
        ISBN: "9780307474278",
        year: 2003,
        author: "Dan Brown",
        image:
          "https://m.media-amazon.com/images/I/515ZEGN16WL._SX311_BO1,204,203,200_.jpg",
        description:
          "A fast-paced thriller that combines art, history, and religion as a symbologist and a cryptologist unravel a hidden secret.",
      },
      {
        id: 4,
        name: "The Silent Patient",
        price: 11.99,
        ISBN: "9781250301697",
        year: 2019,
        author: "Alex Michaelides",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDQRHaISTBW4Q1bX0fOYSNhpD8o3Slktwuew&usqp=CAU",
        description:
          "A psychological suspense novel about a famous painter who stops speaking after shooting her husband, and the psychotherapist determined to unravel her mystery.",
      },
      {
        id: 5,
        name: "The Girl",
        price: 9.99,
        ISBN: "9780307454546",
        year: 2005,
        author: "Stieg Larsson",
        image: "https://pictures.abebooks.com/isbn/9781847246929-de.jpg",
        description:
          "A gripping crime novel that follows a journalist and a troubled hacker as they investigate a decades-old disappearance.",
      },
      {
        id: 6,
        name: "The Bourne Identity",
        price: 8.99,
        ISBN: "9780553593549",
        year: 1980,
        author: "Robert Ludlum",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8c6pqTs1dBmo9mDOWMzuErDeCwfubmFBElA&usqp=CAU",
        description:
          "An action-packed thriller that introduces Jason Bourne, a man suffering from amnesia and hunted by assassins.",
      },
      {
        id: 7,
        name: "The Shining",
        price: 7.99,
        ISBN: "9780307743657",
        year: 1977,
        author: "Stephen King",
        image: "https://m.media-amazon.com/images/I/81QckmGleYL.jpg",
        description:
          "A classic horror novel about a family who becomes the winter caretakers of a haunted hotel, with the father descending into madness.",
      },
      {
        id: 8,
        name: "The Firm",
        price: 8.5,
        ISBN: "9780440245926",
        year: 1991,
        author: "John Grisham",
        image:
          "https://m.media-amazon.com/images/I/511-3J2q2+L._AC_UF894,1000_QL80_.jpg",
        description:
          "A legal thriller that follows a young lawyer who discovers his prestigious law firm has a dark secret.",
      },
      {
        id: 9,
        name: "The Silence of the Lambs",
        price: 10.95,
        ISBN: "9780312924584",
        year: 1988,
        author: "Thomas Harris",
        image:
          "https://m.media-amazon.com/images/I/814fRILnbnL._AC_UF894,1000_QL80_.jpg",
        description:
          "A chilling novel featuring FBI trainee Clarice Starling as she enlists the help of the imprisoned serial killer, Dr. Hannibal Lecter, to catch another serial killer.",
      },
      {
        id: 10,
        name: "The Lincoln Lawyer",
        price: 9.49,
        ISBN: "9780316153677",
        year: 2005,
        author: "Michael Connelly",
        image:
          "https://m.media-amazon.com/images/I/819Ll7tcUqL._AC_UF894,1000_QL80_.jpg",
        description:
          "A legal thriller about a defense attorney who operates from the back seat of his Lincoln Town Car, taking on a high-profile case with unexpected twists.",
      },
      {
        id: 11,
        name: "The Hunt for Red October",
        price: 8.99,
        ISBN: "9780425269364",
        year: 1984,
        author: "Tom Clancy",
        image:
          "https://upload.wikimedia.org/wikipedia/en/c/c2/HuntForRedOctober.JPG",
        description:
          "A military thriller that follows a CIA analyst and a Soviet submarine captain during a high-stakes naval chase.",
      },
      {
        id: 12,
        name: "Sharp Objects",
        price: 10.99,
        ISBN: "9780307341556",
        year: 2006,
        author: "Gillian Flynn",
        image:
          "https://m.media-amazon.com/images/I/71PEVpZOtDL._AC_UF1000,1000_QL80_.jpg",
        description:
          "A dark and disturbing novel about a journalist who returns to her hometown to cover a murder investigation, unraveling dark secrets from her past.",
      },
      {
        id: 13,
        name: "Dragon Tattoo",
        price: 9.99,
        ISBN: "9780307454546",
        year: 2005,
        author: "Stieg Larsson",
        image:
          "https://m.media-amazon.com/images/I/71PK0mfHRDL._AC_UF894,1000_QL80_.jpg",
        description:
          "A gripping crime novel that follows a journalist and a troubled hacker as they investigate a decades-old disappearance.",
      },
      {
        id: 14,
        name: "The Girl on the Train",
        price: 9.99,
        ISBN: "9781594633669",
        year: 2015,
        author: "Paula Hawkins",
        image:
          "https://static.onecms.io/wp-content/uploads/sites/6/2016/08/0108656800-ew-1429-train_0_0.jpg",
        description:
          "A gripping story of a woman who becomes entangled in a missing persons investigation after witnessing something shocking during her daily train commute.",
      },
      {
        id: 15,
        name: "The Da Vinci Code",
        price: 8.99,
        ISBN: "9780307474278",
        year: 2003,
        author: "Dan Brown",
        image: "https://i.ebayimg.com/images/g/PhUAAOSweNNgiphk/s-l600.jpg",
        description:
          "A fast-paced thriller that combines art, history, and religion as a symbologist and a cryptologist unravel a hidden secret.",
      },
      {
        id: 16,
        name: "The Silent Patient",
        price: 11.99,
        ISBN: "9781250301697",
        year: 2019,
        author: "Alex Michaelides",
        image: "https://d1pwnu15mzvjms.cloudfront.net/210x320/tpm.jpg",
        description:
          "A psychological suspense novel about a famous painter who stops speaking after shooting her husband, and the psychotherapist determined to unravel her mystery.",
      },
      {
        id: 17,
        name: "The Bourne Identity",
        price: 8.99,
        ISBN: "9780553593549",
        year: 1980,
        author: "Robert Ludlum",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5RVUdNgugAUf7Hu5cJ-mcTTmXucMeE5HnKrqH-hjDR4yxpZpVLYW0Ie9RLl1m9avklTE&usqp=CAU",
        description:
          "An action-packed thriller that introduces Jason Bourne, a man suffering from amnesia and hunted by assassins.",
      },
      {
        id: 18,
        name: "The Shining",
        price: 7.99,
        ISBN: "9780307743657",
        year: 1977,
        author: "Stephen King",
        image:
          "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1353277730i/11588.jpg",
        description:
          "A classic horror novel about a family who becomes the winter caretakers of a haunted hotel, with the father descending into madness.",
      },
      {
        id: 19,
        name: "The Firm",
        price: 8.5,
        ISBN: "9780440245926",
        year: 1991,
        author: "John Grisham",
        image:
          "https://m.media-amazon.com/images/I/91Sjhx5q0HL._AC_UF894,1000_QL80_.jpg",
        description:
          "A legal thriller that follows a young lawyer who discovers his prestigious law firm has a dark secret.",
      },
      {
        id: 20,
        name: "The Silence of the Lambs",
        price: 10.95,
        ISBN: "9780312924584",
        year: 1988,
        author: "Thomas Harris",
        image:
          "data:image/jpeg;base64,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",
        description:
          "A chilling novel featuring FBI trainee Clarice Starling as she enlists the help of the imprisoned serial killer, Dr. Hannibal Lecter, to catch another serial killer.",
      },
    ],
  },
  {
    id: 4,
    category: "Romance",
    image:
      "https://m.media-amazon.com/images/I/51ySyG+ZePL._SY344_BO1,204,203,200_.jpg",
    books: [
      {
        id: 1,
        name: "Pride and Prejudice",
        price: 9.99,
        ISBN: "9780141439518",
        year: 1813,
        author: "Jane Austen",
        image: "https://example.com/pride-and-prejudice.jpg",
        description:
          "A classic novel about the complicated relationship between Elizabeth Bennet and Mr. Darcy.",
      },
      {
        id: 2,
        name: "Outlander",
        price: 12.99,
        ISBN: "9780385302302",
        year: 1991,
        author: "Diana Gabaldon",
        image: "https://example.com/outlander.jpg",
        description:
          "A time-travel romance following the story of Claire Randall, a World War II nurse who finds herself transported to 18th-century Scotland.",
      },
      {
        id: 3,
        name: "Me Before You",
        price: 8.99,
        ISBN: "9780670026609",
        year: 2012,
        author: "Jojo Moyes",
        image: "https://example.com/me-before-you.jpg",
        description:
          "A heartwarming story about the relationship between a young woman named Louisa Clark and a quadriplegic man named Will Traynor.",
      },
      {
        id: 4,
        name: "The Notebook",
        price: 7.99,
        ISBN: "9780446605236",
        year: 1996,
        author: "Nicholas Sparks",
        image: "https://example.com/the-notebook.jpg",
        description:
          "A poignant tale of love and loss, chronicling the enduring bond between Noah Calhoun and Allie Nelson.",
      },
      {
        id: 5,
        name: "Jane Eyre",
        price: 9.95,
        ISBN: "9780141441146",
        year: 1847,
        author: "Charlotte Brontë",
        image: "https://example.com/jane-eyre.jpg",
        description:
          "A gothic romance novel depicting the life of Jane Eyre, a young governess who falls in love with the brooding Mr. Rochester.",
      },
      {
        id: 6,
        name: "Gone with the Wind",
        price: 13.99,
        ISBN: "9781451635621",
        year: 1936,
        author: "Margaret Mitchell",
        image: "https://example.com/gone-with-the-wind.jpg",
        description:
          "A sweeping epic set during the American Civil War, focusing on the tumultuous love affair between Scarlett O'Hara and Rhett Butler.",
      },
      {
        id: 7,
        name: "The Fault in Our Stars",
        price: 10.99,
        ISBN: "9780525478812",
        year: 2012,
        author: "John Green",
        image: "https://example.com/the-fault-in-our-stars.jpg",
        description:
          "A heart-wrenching story of Hazel Grace Lancaster and Augustus Waters, two teenagers who meet and fall in love at a cancer support group.",
      },
      {
        id: 8,
        name: "The Hating Game",
        price: 8.49,
        ISBN: "9780062439598",
        year: 2016,
        author: "Sally Thorne",
        image: "https://example.com/the-hating-game.jpg",
        description:
          "A enemies-to-lovers workplace romance featuring Lucy Hutton and Joshua Templeman, two co-workers engaged in a fierce rivalry.",
      },
      {
        id: 9,
        name: "The Rosie Project",
        price: 9.29,
        ISBN: "9781476729091",
        year: 2013,
        author: "Graeme Simsion",
        image: "https://example.com/the-rosie-project.jpg",
        description:
          "A quirky and heartwarming story of Don Tillman, a socially challenged genetics professor, and his quest for love.",
      },
      {
        id: 10,
        name: "The Time Traveler's Wife",
        price: 11.99,
        ISBN: "9781476764832",
        year: 2003,
        author: "Audrey Niffenegger",
        image: "https://example.com/the-time-travelers-wife.jpg",
        description:
          "A unique love story between Henry DeTamble, a man with a genetic disorder that causes him to time travel, and Clare Abshire, his wife.",
      },
      {
        id: 11,
        name: "The Bridges of Madison County",
        price: 7.95,
        ISBN: "9780446364492",
        year: 1992,
        author: "Robert James Waller",
        image: "https://example.com/the-bridges-of-madison-county.jpg",
        description:
          "A bittersweet romance set in 1960s Iowa, exploring the passionate affair between Francesca Johnson and Robert Kincaid.",
      },
      {
        id: 12,
        name: "Eleanor & Park",
        price: 9.95,
        ISBN: "9781250012579",
        year: 2013,
        author: "Rainbow Rowell",
        image: "https://example.com/eleanor-and-park.jpg",
        description:
          "A young adult novel about the love story between two misfit teenagers, Eleanor and Park, set in the 1980s.",
      },
      {
        id: 13,
        name: "The Thorn Birds",
        price: 8.99,
        ISBN: "9780061990477",
        year: 1977,
        author: "Colleen McCullough",
        image: "https://example.com/the-thorn-birds.jpg",
        description:
          "An epic saga spanning generations, centered around the forbidden love between Meggie Cleary and Father Ralph de Bricassart.",
      },
      {
        id: 14,
        name: "It Ends with Us",
        price: 10.49,
        ISBN: "9781501110368",
        year: 2016,
        author: "Colleen Hoover",
        image: "https://example.com/it-ends-with-us.jpg",
        description:
          "A powerful contemporary romance tackling complex issues of love, loyalty, and personal growth, written by Colleen Hoover.",
      },
      {
        id: 15,
        name: "The Rosie Effect",
        price: 9.99,
        ISBN: "9781476767314",
        year: 2014,
        author: "Graeme Simsion",
        image: "https://example.com/the-rosie-effect.jpg",
        description:
          'The sequel to "The Rosie Project," continuing the story of Don Tillman and Rosie Jarman as they navigate the challenges of married life.',
      },
      {
        id: 16,
        name: "The Wedding Date",
        price: 7.99,
        ISBN: "9780399587665",
        year: 2018,
        author: "Jasmine Guillory",
        image: "https://example.com/the-wedding-date.jpg",
        description:
          "A contemporary romance featuring Alexa Monroe and Drew Nichols, who pretend to be a couple for a weekend wedding.",
      },
      {
        id: 17,
        name: "The Best of Me",
        price: 8.99,
        ISBN: "9780446547659",
        year: 2011,
        author: "Nicholas Sparks",
        image: "https://example.com/the-best-of-me.jpg",
        description:
          "A touching story of high school sweethearts Amanda Collier and Dawson Cole, who reunite after many years apart.",
      },
      {
        id: 18,
        name: "The Time Keeper",
        price: 9.49,
        ISBN: "9781401322786",
        year: 2012,
        author: "Mitch Albom",
        image: "https://example.com/the-time-keeper.jpg",
        description:
          "A thought-provoking novel exploring the concept of time and its impact on our lives, through the story of Dor, the first man to count the hours.",
      },
      {
        id: 19,
        name: "The Bronze Horseman",
        price: 11.95,
        ISBN: "9780061854149",
        year: 2009,
        author: "Paullina Simons",
        image: "https://example.com/the-bronze-horseman.jpg",
        description:
          "Set in World War II Russia, this historical romance follows the love affair between Tatiana Metanova and Alexander Barrington.",
      },
      {
        id: 20,
        name: "The Last Letter from Your Lover",
        price: 10.79,
        ISBN: "9780143121107",
        year: 2011,
        author: "Jojo Moyes",
        image: "https://example.com/the-last-letter-from-your-lover.jpg",
        description:
          "A captivating story of love and missed connections, spanning two time periods and centered around a lost love letter.",
      },
    ],
  },
  {
    id: 5,
    category: "Science Fiction",
    image: "https://bilder.buecher.de/produkte/59/59402/59402745n.jpg",
    books: [
      {
        id: 1,
        name: "Dune",
        price: 12.99,
        ISBN: "9780441172719",
        year: 1965,
        author: "Frank Herbert",
        image: "https://example.com/dune.jpg",
        description:
          "A science fiction epic set in a distant future where interstellar travel, political intrigue, and ecological challenges shape the destiny of humanity.",
      },
      {
        id: 2,
        name: "Neuromancer",
        price: 10.49,
        ISBN: "9780441569595",
        year: 1984,
        author: "William Gibson",
        image: "https://example.com/neuromancer.jpg",
        description:
          'Considered a seminal work in cyberpunk literature, "Neuromancer" follows a washed-up computer hacker on a mission to pull off the ultimate digital heist.',
      },
      {
        id: 3,
        name: "Foundation",
        price: 8.99,
        ISBN: "9780553293357",
        year: 1951,
        author: "Isaac Asimov",
        image: "https://example.com/foundation.jpg",
        description:
          'The first book in the iconic "Foundation" series, it explores the fall of a galactic empire and the efforts to preserve humanity\'s knowledge and civilization.',
      },
      {
        id: 4,
        name: "Snow Crash",
        price: 9.95,
        ISBN: "9780553380958",
        year: 1992,
        author: "Neal Stephenson",
        image: "https://example.com/snow-crash.jpg",
        description:
          "A cyberpunk novel that takes place in a dystopian future where a hacker named Hiro Protagonist uncovers a conspiracy involving a virtual reality drug.",
      },
      {
        id: 5,
        name: "Ender's Game",
        price: 7.99,
        ISBN: "9780812550702",
        year: 1985,
        author: "Orson Scott Card",
        image: "https://example.com/enders-game.jpg",
        description:
          'A military science fiction novel following the story of Andrew "Ender" Wiggin, a child prodigy who is trained to lead Earth\'s forces against an alien species.',
      },
      {
        id: 6,
        name: "Brave New World",
        price: 9.99,
        ISBN: "9780060850524",
        year: 1932,
        author: "Aldous Huxley",
        image: "https://example.com/brave-new-world.jpg",
        description:
          "A dystopian novel that depicts a society where scientific advancements have created a rigidly controlled world with extreme social stratification.",
      },
      {
        id: 7,
        name: "Hyperion",
        price: 11.49,
        ISBN: "9780553283686",
        year: 1989,
        author: "Dan Simmons",
        image: "https://example.com/hyperion.jpg",
        description:
          "A science fiction masterpiece that weaves together the stories of seven pilgrims on a far-future world, each with a unique tale to tell.",
      },
      {
        id: 8,
        name: "The Hitchhiker's Guide to the Galaxy",
        price: 6.99,
        ISBN: "9780345391803",
        year: 1979,
        author: "Douglas Adams",
        image: "https://example.com/hitchhikers-guide.jpg",
        description:
          "A comedic science fiction series following the misadventures of an ordinary human, Arthur Dent, as he travels the universe after Earth's destruction.",
      },
      {
        id: 9,
        name: "1984",
        price: 8.49,
        ISBN: "9780451524935",
        year: 1949,
        author: "George Orwell",
        image: "https://example.com/1984.jpg",
        description:
          "A dystopian novel set in a totalitarian society, exploring themes of government surveillance, propaganda, and the loss of individual freedom.",
      },
      {
        id: 10,
        name: "The Left Hand of Darkness",
        price: 10.99,
        ISBN: "9780441478125",
        year: 1969,
        author: "Ursula K. Le Guin",
        image: "https://example.com/left-hand-of-darkness.jpg",
        description:
          "A groundbreaking work of science fiction that explores themes of gender and sexuality in a world where the inhabitants have no fixed gender.",
      },
      {
        id: 11,
        name: "The War of the Worlds",
        price: 7.95,
        ISBN: "9780486295060",
        year: 1898,
        author: "H.G. Wells",
        image: "https://example.com/war-of-the-worlds.jpg",
        description:
          "One of the earliest and most influential science fiction novels, it tells the story of a Martian invasion of Earth and its devastating consequences.",
      },
      {
        id: 12,
        name: "Snow Crash",
        price: 9.95,
        ISBN: "9780553380958",
        year: 1992,
        author: "Neal Stephenson",
        image: "https://example.com/snow-crash.jpg",
        description:
          "A cyberpunk novel that takes place in a dystopian future where a hacker named Hiro Protagonist uncovers a conspiracy involving a virtual reality drug.",
      },
      {
        id: 13,
        name: "The Martian",
        price: 8.99,
        ISBN: "9780553418028",
        year: 2011,
        author: "Andy Weir",
        image: "https://example.com/the-martian.jpg",
        description:
          "A gripping tale of survival on Mars, as astronaut Mark Watney must rely on his ingenuity to stay alive and find a way back home.",
      },
      {
        id: 14,
        name: "The Handmaid's Tale",
        price: 9.49,
        ISBN: "9780385490818",
        year: 1985,
        author: "Margaret Atwood",
        image: "https://example.com/the-handmaids-tale.jpg",
        description:
          "A dystopian novel set in a patriarchal society where fertile women, known as handmaids, are forced into reproductive servitude.",
      },
      {
        id: 15,
        name: "The Time Machine",
        price: 6.99,
        ISBN: "9780486284729",
        year: 1895,
        author: "H.G. Wells",
        image: "https://example.com/the-time-machine.jpg",
        description:
          "A classic science fiction novel that follows the adventures of a time traveler who journeys far into the future and witnesses the evolution of humanity.",
      },
      {
        id: 16,
        name: "Ready Player One",
        price: 10.99,
        ISBN: "9780307887443",
        year: 2011,
        author: "Ernest Cline",
        image: "https://example.com/ready-player-one.jpg",
        description:
          "A virtual reality adventure set in a dystopian future where people escape the real world by entering a massive online simulation called the OASIS.",
      },
      {
        id: 17,
        name: "Fahrenheit 451",
        price: 7.49,
        ISBN: "9781451673319",
        year: 1953,
        author: "Ray Bradbury",
        image: "https://example.com/fahrenheit-451.jpg",
        description:
          "A dystopian novel set in a future society where books are banned and burned, and one man rebels against the suppression of knowledge.",
      },
      {
        id: 18,
        name: "Jurassic Park",
        price: 8.99,
        ISBN: "9780345370778",
        year: 1990,
        author: "Michael Crichton",
        image: "https://example.com/jurassic-park.jpg",
        description:
          "A thrilling science fiction novel about a theme park filled with genetically engineered dinosaurs that escape and wreak havoc on the island.",
      },
      {
        id: 19,
        name: "The Hunger Games",
        price: 9.99,
        ISBN: "9780439023528",
        year: 2008,
        author: "Suzanne Collins",
        image: "https://example.com/the-hunger-games.jpg",
        description:
          "The first book in a popular dystopian trilogy, it follows a young girl named Katniss Everdeen as she participates in a deadly televised competition.",
      },
      {
        id: 20,
        name: "The Invisible Man",
        price: 6.95,
        ISBN: "9780486281384",
        year: 1897,
        author: "H.G. Wells",
        image: "https://example.com/the-invisible-man.jpg",
        description:
          "A science fiction novel about a scientist who discovers the secret of invisibility but struggles to control his newfound power.",
      },
    ],
  },
  {
    id: 6,
    category: "Fantasy",
    image: "https://bilder.buecher.de/produkte/49/49095/49095888n.jpg",
    books: [
      {
        id: 1,
        name: "Harry Potter and the Philosopher's Stone",
        price: 12.99,
        ISBN: "9780747532699",
        year: 1997,
        author: "J.K. Rowling",
        image: "https://example.com/harry-potter-1.jpg",
        description:
          "The first book in the popular Harry Potter series it introduces the young wizard Harry Potter and his journey at Hogwarts School of Witchcraft and Wizardry.",
      },
      {
        id: 2,
        name: "The Lord of the Rings",
        price: 19.99,
        ISBN: "9780544003415",
        year: 1954,
        author: "J.R.R. Tolkien",
        image: "https://example.com/lord-of-the-rings.jpg",
        description:
          "A epic high fantasy trilogy that follows the quest of Frodo Baggins to destroy the One Ring and save Middle-earth from the dark lord Sauron.",
      },
      {
        id: 3,
        name: "A Game of Thrones",
        price: 10.99,
        ISBN: "9780553573404",
        year: 1996,
        author: "George R.R. Martin",
        image: "https://example.com/game-of-thrones.jpg",
        description:
          "The first book in the A Song of Ice and Fire series, it depicts the power struggles among noble families in the fictional continent of Westeros.",
      },
      {
        id: 4,
        name: "The Chronicles of Narnia",
        price: 14.95,
        ISBN: "9780066238500",
        year: 1950,
        author: "C.S. Lewis",
        image: "https://example.com/chronicles-of-narnia.jpg",
        description:
          "A series of seven fantasy novels set in the fictional world of Narnia, where various adventures and battles between good and evil take place.",
      },
      {
        id: 5,
        name: "The Hobbit",
        price: 8.99,
        ISBN: "9780345339683",
        year: 1937,
        author: "J.R.R. Tolkien",
        image: "https://example.com/the-hobbit.jpg",
        description:
          "A prequel to The Lord of the Rings, it follows the adventures of Bilbo Baggins as he accompanies a group of dwarves on a quest to reclaim their homeland.",
      },
      {
        id: 6,
        name: "Eragon",
        price: 9.49,
        ISBN: "9780375826696",
        year: 2002,
        author: "Christopher Paolini",
        image: "https://example.com/eragon.jpg",
        description:
          "The first book in the Inheritance Cycle series, it tells the story of a young farm boy named Eragon who becomes a dragon rider and battles against an evil king.",
      },
      {
        id: 7,
        name: "The Name of the Wind",
        price: 11.99,
        ISBN: "9780756404741",
        year: 2007,
        author: "Patrick Rothfuss",
        image: "https://example.com/the-name-of-the-wind.jpg",
        description:
          "The first book in The Kingkiller Chronicle series, it follows the life of Kvothe, a magically gifted young man, as he seeks vengeance and uncovers secrets.",
      },
      {
        id: 8,
        name: "American Gods",
        price: 13.99,
        ISBN: "9780060558123",
        year: 2001,
        author: "Neil Gaiman",
        image: "https://example.com/american-gods.jpg",
        description:
          "A contemporary fantasy novel that explores the clash between the old gods of mythology and the new gods of modern society.",
      },
      {
        id: 9,
        name: "Mistborn: The Final Empire",
        price: 9.99,
        ISBN: "9780765311788",
        year: 2006,
        author: "Brandon Sanderson",
        image: "https://example.com/mistborn.jpg",
        description:
          "The first book in the Mistborn trilogy, it is set in a world where the tyrannical Lord Ruler dominates the land and follows a group of rebels with magical abilities.",
      },
      {
        id: 10,
        name: "Jonathan Strange & Mr Norrell",
        price: 15.99,
        ISBN: "9780765356159",
        year: 2004,
        author: "Susanna Clarke",
        image: "https://example.com/jonathan-strange-and-mr-norrell.jpg",
        description:
          "A historical fantasy novel set in 19th-century England, it portrays an alternative history where magic once existed and two magicians emerge to restore it.",
      },
      {
        id: 11,
        name: "The Lies of Locke Lamora",
        price: 10.99,
        ISBN: "9780553588941",
        year: 2006,
        author: "Scott Lynch",
        image: "https://example.com/the-lies-of-locke-lamora.jpg",
        description:
          "The first book in the Gentleman Bastard series, it follows the adventures of a skilled thief and con artist named Locke Lamora in a city of political intrigue.",
      },
      {
        id: 12,
        name: "The Magicians",
        price: 9.99,
        ISBN: "9780670020553",
        year: 2009,
        author: "Lev Grossman",
        image: "https://example.com/the-magicians.jpg",
        description:
          "A contemporary fantasy novel that follows a young man named Quentin Coldwater as he attends a secret college of magic and discovers a darker side to the magical world.",
      },
      {
        id: 13,
        name: "The Blade Itself",
        price: 12.99,
        ISBN: "9780575079793",
        year: 2006,
        author: "Joe Abercrombie",
        image: "https://example.com/the-blade-itself.jpg",
        description:
          "The first book in The First Law trilogy, it is a dark fantasy novel that follows the lives of several morally ambiguous characters caught up in a world of power struggles.",
      },
      {
        id: 14,
        name: "Good Omens",
        price: 8.99,
        ISBN: "9780060853983",
        year: 1990,
        author: "Terry Pratchett, Neil Gaiman",
        image: "https://example.com/good-omens.jpg",
        description:
          "A comedic fantasy novel about an angel and a demon who team up to prevent the apocalypse and protect the young Antichrist.",
      },
      {
        id: 15,
        name: "The Night Circus",
        price: 11.99,
        ISBN: "9780307744432",
        year: 2011,
        author: "Erin Morgenstern",
        image: "https://example.com/the-night-circus.jpg",
        description:
          "A fantastical novel set in a magical circus that only appears at night, it follows the lives of two young magicians pitted against each other in a competition.",
      },
      {
        id: 16,
        name: "The Way of Kings",
        price: 14.99,
        ISBN: "9780765365274",
        year: 2010,
        author: "Brandon Sanderson",
        image: "https://example.com/the-way-of-kings.jpg",
        description:
          "The first book in The Stormlight Archive series, it is set in a world of immense storms and follows various characters as they navigate political and magical conflicts.",
      },
      {
        id: 17,
        name: "The Fifth Season",
        price: 13.99,
        ISBN: "9780316229296",
        year: 2015,
        author: "N.K. Jemisin",
        image: "https://example.com/the-fifth-season.jpg",
        description:
          "The first book in The Broken Earth trilogy, it is set in a world plagued by catastrophic seismic events and follows a woman with incredible powers as she seeks revenge.",
      },
      {
        id: 18,
        name: "Stardust",
        price: 9.99,
        ISBN: "9780380804559",
        year: 1999,
        author: "Neil Gaiman",
        image: "https://example.com/stardust.jpg",
        description:
          "A whimsical fantasy novel that tells the story of a young man named Tristran Thorn who ventures into the magical realm of Faerie to capture a fallen star.",
      },
      {
        id: 19,
        name: "The Eye of the World",
        price: 11.99,
        ISBN: "9780812511819",
        year: 1990,
        author: "Robert Jordan",
        image: "https://example.com/the-eye-of-the-world.jpg",
        description:
          "The first book in The Wheel of Time series, it follows a group of young people who are drawn into a battle against the forces of darkness threatening their world.",
      },
      {
        id: 20,
        name: "Uprooted",
        price: 10.99,
        ISBN: "9780804179034",
        year: 2015,
        author: "Naomi Novik",
        image: "https://example.com/uprooted.jpg",
        description:
          "A standalone fantasy novel inspired by Polish folklore, it follows a young woman named Agnieszka who becomes entangled in a dangerous magical forest and must uncover its secrets.",
      },
    ],
  },
  {
    id: 7,

    category: "Historical Fiction",
    image:
      "https://static01.nyt.com/images/2022/10/01/books/01HARRIS-COVER/01HARRIS-COVER-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    books: [
      {
        id: 1,
        name: "The Book Thief",
        price: 12.99,
        ISBN: "9780375842207",
        year: 2005,
        author: "Markus Zusak",
        image: "https://example.com/the-book-thief.jpg",
        description:
          "Set in Nazi Germany, this book follows the story of Liesel Meminger, a young girl who finds solace in stealing books and sharing them with others during the horrors of World War II.",
      },
      {
        id: 2,
        name: "All the Light We Cannot See",
        price: 14.99,
        ISBN: "9781501173219",
        year: 2014,
        author: "Anthony Doerr",
        image: "https://example.com/all-the-light-we-cannot-see.jpg",
        description:
          "Set during World War II, this Pulitzer Prize-winning novel tells the parallel stories of a blind French girl and a German boy whose paths eventually converge.",
      },
      {
        id: 3,
        name: "The Pillars of the Earth",
        price: 10.99,
        ISBN: "9780451225245",
        year: 1989,
        author: "Ken Follett",
        image: "https://example.com/the-pillars-of-the-earth.jpg",
        description:
          "Set in 12th-century England, this epic tale follows the construction of a cathedral and the intertwined lives of the characters involved in its creation.",
      },
      {
        id: 4,
        name: "Wolf Hall",
        price: 11.99,
        ISBN: "9780007230204",
        year: 2009,
        author: "Hilary Mantel",
        image: "https://example.com/wolf-hall.jpg",
        description:
          "The first book in the Thomas Cromwell Trilogy, it provides a fictionalized account of the rise to power of Thomas Cromwell in the court of Henry VIII.",
      },
      {
        id: 5,
        name: "The Kite Runner",
        price: 9.99,
        ISBN: "9781594480003",
        year: 2003,
        author: "Khaled Hosseini",
        image: "https://example.com/the-kite-runner.jpg",
        description:
          "Set in Afghanistan, this novel follows the story of Amir, a young boy from Kabul, and his journey of redemption against the backdrop of the country's tumultuous history.",
      },
      {
        id: 6,
        name: "Gone with the Wind",
        price: 8.99,
        ISBN: "9781451635621",
        year: 1936,
        author: "Margaret Mitchell",
        image: "https://example.com/gone-with-the-wind.jpg",
        description:
          "Set in the American South during the Civil War and Reconstruction era, this classic novel tells the story of Scarlett O'Hara and her struggle to survive and rebuild her life.",
      },
      {
        id: 7,
        name: "The Help",
        price: 12.99,
        ISBN: "9780399155345",
        year: 2009,
        author: "Kathryn Stockett",
        image: "https://example.com/the-help.jpg",
        description:
          "Set in 1960s Mississippi, this novel explores the lives of African American maids and their relationship with their white employers, highlighting themes of racial inequality and friendship.",
      },
      {
        id: 8,
        name: "The Tattooist of Auschwitz",
        price: 11.99,
        ISBN: "9780062797155",
        year: 2018,
        author: "Heather Morris",
        image: "https://example.com/the-tattooist-of-auschwitz.jpg",
        description:
          "Based on a true story, this book follows the experiences of Lale Sokolov, a Slovakian Jew, who becomes the tattooist at the Auschwitz concentration camp during World War II.",
      },
      {
        id: 9,
        name: "The Underground Railroad",
        price: 13.99,
        ISBN: "9780385542364",
        year: 2016,
        author: "Colson Whitehead",
        image: "https://example.com/the-underground-railroad.jpg",
        description:
          "This Pulitzer Prize-winning novel reimagines the historical Underground Railroad as an actual underground network of trains, following the journey of a young enslaved woman named Cora.",
      },
      {
        id: 10,
        name: "The Alice Network",
        price: 10.99,
        ISBN: "9780062654199",
        year: 2017,
        author: "Kate Quinn",
        image: "https://example.com/the-alice-network.jpg",
        description:
          "Set during World War I and World War II, this novel intertwines the stories of two women: Eve, a spy for the Alice Network in World War I, and Charlie, a pregnant American socialite searching for her cousin in post-World War II France.",
      },
      {
        id: 11,
        name: "The Other Boleyn Girl",
        price: 9.99,
        ISBN: "9780743227445",
        year: 2001,
        author: "Philippa Gregory",
        image: "https://example.com/the-other-boleyn-girl.jpg",
        description:
          "Set in Tudor England, this historical novel follows the lives of Mary and Anne Boleyn, sisters who become rivals for the affections of King Henry VIII.",
      },
      {
        id: 12,
        name: "Memoirs of a Geisha",
        price: 8.99,
        ISBN: "9780679781585",
        year: 1997,
        author: "Arthur Golden",
        image: "https://example.com/memoirs-of-a-geisha.jpg",
        description:
          "This book tells the fictional story of a geisha named Sayuri, her journey from a poor fishing village to becoming one of the most celebrated geishas in Kyoto, Japan, and her experiences during World War II.",
      },
      {
        id: 13,
        name: "The Guernsey Literary and Potato Peel Pie Society",
        price: 12.99,
        ISBN: "9780385341004",
        year: 2008,
        author: "Mary Ann Shaffer and Annie Barrows",
        image:
          "https://example.com/the-guernsey-literary-and-potato-peel-pie-society.jpg",
        description:
          "Set in the aftermath of World War II, this novel is told through a series of letters and explores the story of a writer who forms a bond with the residents of Guernsey Island, occupied by the Germans during the war.",
      },
      {
        id: 14,
        name: "Outlander",
        price: 11.99,
        ISBN: "9780440212560",
        year: 1991,
        author: "Diana Gabaldon",
        image: "https://example.com/outlander.jpg",
        description:
          "This historical time-travel novel follows the story of Claire Randall, a nurse from 1945 who is transported back in time to 1743 Scotland, where she becomes involved in the Jacobite risings.",
      },
      {
        id: 15,
        name: "The Color Purple",
        price: 9.99,
        ISBN: "9780156028356",
        year: 1982,
        author: "Alice Walker",
        image: "https://example.com/the-color-purple.jpg",
        description:
          "Set in the Southern United States during the early 20th century, this novel explores the lives of African American women through the character of Celie and addresses themes of racism, sexism, and identity.",
      },
      {
        id: 16,
        name: "The Henna Artist",
        price: 12.99,
        ISBN: "9780778309451",
        year: 2020,
        author: "Alka Joshi",
        image: "https://example.com/the-henna-artist.jpg",
        description:
          "Set in 1950s India, this book follows the story of a talented henna artist named Lakshmi, her journey to independence, and the challenges she faces in a changing society.",
      },
      {
        id: 17,
        name: "The Shadow of the Wind",
        price: 10.99,
        ISBN: "9780143034902",
        year: 2004,
        author: "Carlos Ruiz Zafón",
        image: "https://example.com/the-shadow-of-the-wind.jpg",
        description:
          "Set in post-war Barcelona, Spain, this novel explores the mysterious world of books through the story of a young boy named Daniel who becomes obsessed with a forgotten author.",
      },
      {
        id: 18,
        name: "Salt to the Sea",
        price: 11.99,
        ISBN: "9780142423622",
        year: 2016,
        author: "Ruta Sepetys",
        image: "https://example.com/salt-to-the-sea.jpg",
        description:
          "Set during World War II, this book tells the intertwined stories of four young individuals fleeing from the advancing Red Army and seeking refuge on the Wilhelm Gustloff, a German military ship.",
      },
      {
        id: 19,
        name: "The Tea Rose",
        price: 9.99,
        ISBN: "9780312351626",
        year: 2002,
        author: "Jennifer Donnelly",
        image: "https://example.com/the-tea-rose.jpg",
        description:
          "Set in Victorian London, this novel follows the life of Fiona Finnegan, a young woman who overcomes adversity and builds a successful tea business while navigating love and tragedy.",
      },
      {
        id: 20,
        name: "Alias Grace",
        price: 12.99,
        ISBN: "9780385490443",
        year: 1996,
        author: "Margaret Atwood",
        image: "https://example.com/alias-grace.jpg",
        description:
          "Based on a true story, this novel is set in 19th-century Canada and tells the story of Grace Marks, a young Irish immigrant convicted of murder, as she recounts her experiences and seeks to uncover the truth.",
      },
    ],
  },
  {
    id: 8,
    category: "Biography",
    image:
      "https://kbimages1-a.akamaihd.net/0b14ac0c-7989-483a-be12-8c90f82f47d0/1200/1200/False/isaac-newton-the-smartest-person-that-ever-lived-biography-of-famous-people-grade-3-children-s-biography-books.jpg",
    books: [
      {
        id: 1,
        name: "The Diary of a Young Girl",
        price: 9.99,
        ISBN: "9780553577129",
        year: 1947,
        author: "Anne Frank",
        image: "https://example.com/the-diary-of-a-young-girl.jpg",
        description:
          "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II, provides an intimate and powerful account of her life and experiences in hiding.",
      },
      {
        id: 2,
        name: "Steve Jobs",
        price: 14.99,
        ISBN: "9781451648539",
        year: 2011,
        author: "Walter Isaacson",
        image: "https://example.com/steve-jobs.jpg",
        description:
          "This biography explores the life and achievements of Steve Jobs, co-founder of Apple Inc., and provides insights into his innovative thinking and leadership style.",
      },
      {
        id: 3,
        name: "The Autobiography of Malcolm X",
        price: 11.99,
        ISBN: "9780345350688",
        year: 1965,
        author: "Malcolm X",
        image: "https://example.com/the-autobiography-of-malcolm-x.jpg",
        description:
          "In this autobiography, civil rights activist Malcolm X shares his personal journey, transformation, and experiences in advocating for racial equality and justice.",
      },
      {
        id: 4,
        name: "Unbroken: A World War II Story of Survival, Resilience, and Redemption",
        price: 13.99,
        ISBN: "9780812974492",
        year: 2010,
        author: "Laura Hillenbrand",
        image: "https://example.com/unbroken.jpg",
        description:
          "This biography follows the extraordinary life of Louis Zamperini, an Olympic runner and World War II veteran who survived a plane crash, weeks adrift at sea, and brutal years as a prisoner of war.",
      },
      {
        id: 5,
        name: "Becoming",
        price: 12.99,
        ISBN: "9781524763138",
        year: 2018,
        author: "Michelle Obama",
        image: "https://example.com/becoming.jpg",
        description:
          "Michelle Obama, former First Lady of the United States, shares her personal and inspiring journey, from her childhood in Chicago to her time in the White House.",
      },
      {
        id: 6,
        name: "The Diary of a Young Girl",
        price: 9.99,
        ISBN: "9780553577129",
        year: 1947,
        author: "Anne Frank",
        image: "https://example.com/the-diary-of-a-young-girl.jpg",
        description:
          "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II, provides an intimate and powerful account of her life and experiences in hiding.",
      },
      {
        id: 7,
        name: "Educated",
        price: 10.99,
        ISBN: "9780399590504",
        year: 2018,
        author: "Tara Westover",
        image: "https://example.com/educated.jpg",
        description:
          "This memoir tells the story of Tara Westover, who grows up in a strict and abusive household in rural Idaho but eventually escapes and goes on to earn a PhD from Cambridge University.",
      },
      {
        id: 8,
        name: "The Immortal Life of Henrietta Lacks",
        price: 13.99,
        ISBN: "9781400052189",
        year: 2010,
        author: "Rebecca Skloot",
        image: "https://example.com/the-immortal-life-of-henrietta-lacks.jpg",
        description:
          "This book explores the story of Henrietta Lacks, an African American woman whose cells were taken without her consent and used for groundbreaking medical research.",
      },
      {
        id: 9,
        name: "Long Walk to Freedom",
        price: 11.99,
        ISBN: "9780316548182",
        year: 1994,
        author: "Nelson Mandela",
        image: "https://example.com/long-walk-to-freedom.jpg",
        description:
          "Nelson Mandela, the iconic South African leader, shares his autobiography, recounting his struggle against apartheid and his eventual presidency.",
      },
      {
        id: 10,
        name: "Leonardo da Vinci",
        price: 15.99,
        ISBN: "9781501139154",
        year: 2017,
        author: "Walter Isaacson",
        image: "https://example.com/leonardo-da-vinci.jpg",
        description:
          "This biography delves into the life and achievements of Leonardo da Vinci, the renowned artist, scientist, and inventor of the Renaissance era.",
      },
      {
        id: 11,
        name: "The Diary of a Young Girl",
        price: 9.99,
        ISBN: "9780553577129",
        year: 1947,
        author: "Anne Frank",
        image: "https://example.com/the-diary-of-a-young-girl.jpg",
        description:
          "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II, provides an intimate and powerful account of her life and experiences in hiding.",
      },
      {
        id: 12,
        name: "Just Kids",
        price: 12.99,
        ISBN: "9780060936228",
        year: 2010,
        author: "Patti Smith",
        image: "https://example.com/just-kids.jpg",
        description:
          "Musician Patti Smith recalls her relationship with artist Robert Mapplethorpe in this memoir, offering insights into their creative journeys and the bohemian culture of New York City in the 1960s and 1970s.",
      },
      {
        id: 13,
        name: "Shoe Dog: A Memoir by the Creator of Nike",
        price: 14.99,
        ISBN: "9781501135927",
        year: 2016,
        author: "Phil Knight",
        image: "https://example.com/shoe-dog.jpg",
        description:
          "Phil Knight, the co-founder of Nike, shares his memoir, recounting the challenges and triumphs of building one of the world's most iconic brands.",
      },
      {
        id: 14,
        name: "The Glass Castle",
        price: 9.99,
        ISBN: "9780743247542",
        year: 2005,
        author: "Jeannette Walls",
        image: "https://example.com/the-glass-castle.jpg",
        description:
          "In this memoir, Jeannette Walls reflects on her unconventional and nomadic childhood, growing up with parents who had a unique and often chaotic approach to life.",
      },
      {
        id: 15,
        name: "Into the Wild",
        price: 10.99,
        ISBN: "9780385486804",
        year: 1996,
        author: "Jon Krakauer",
        image: "https://example.com/into-the-wild.jpg",
        description:
          "This book tells the true story of Christopher McCandless, a young man who gave up his possessions and ventured into the Alaskan wilderness, seeking a deeper connection with nature.",
      },
      {
        id: 16,
        name: "The Hiding Place",
        price: 8.99,
        ISBN: "9780800794057",
        year: 1971,
        author: "Corrie ten Boom",
        image: "https://example.com/the-hiding-place.jpg",
        description:
          "Corrie ten Boom, a Dutch Christian who helped hide Jews during the Holocaust, shares her powerful story of faith, courage, and survival.",
      },
      {
        id: 17,
        name: "Born a Crime",
        price: 11.99,
        ISBN: "9780399588174",
        year: 2016,
        author: "Trevor Noah",
        image: "https://example.com/born-a-crime.jpg",
        description:
          "Comedian Trevor Noah recounts his upbringing in South Africa during the apartheid era, highlighting the complexities of racial identity and the power of humor.",
      },
      {
        id: 18,
        name: "The Wright Brothers",
        price: 13.99,
        ISBN: "9781476728742",
        year: 2015,
        author: "David McCullough",
        image: "https://example.com/the-wright-brothers.jpg",
        description:
          "This biography explores the lives of Wilbur and Orville Wright, the pioneers of aviation who successfully built and flew the world's first powered airplane.",
      },
      {
        id: 19,
        name: "Wild Swans: Three Daughters of China",
        price: 12.99,
        ISBN: "9780743246989",
        year: 1991,
        author: "Jung Chang",
        image: "https://example.com/wild-swans.jpg",
        description:
          "Jung Chang chronicles the lives of three generations of women in her own family, spanning the tumultuous history of China in the 20th century.",
      },
      {
        id: 20,
        name: "Open",
        price: 10.99,
        ISBN: "9780307388407",
        year: 2009,
        author: "Andre Agassi",
        image: "https://example.com/open.jpg",
        description:
          "In this memoir, tennis champion Andre Agassi provides an honest and revealing account of his career, personal struggles, and journey to find himself.",
      },
    ],
  },
  {
    id: 9,
    category: "Autobiography",
    image:
      "data:image/jpeg;base64,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",
    books: [
      {
        id: 1,
        name: "The Diary of a Young Girl",
        price: 9.99,
        ISBN: "978-0553577129",
        year: 1947,
        author: "Anne Frank",
        image: "https://example.com/book1.jpg",
        description:
          "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II, providing a powerful and personal account of her experiences.",
      },
      {
        id: 2,
        name: "Long Walk to Freedom",
        price: 12.99,
        ISBN: "978-0316548182",
        year: 1994,
        author: "Nelson Mandela",
        image: "https://example.com/book2.jpg",
        description:
          "The autobiography of Nelson Mandela, South Africa's first black president, detailing his journey from imprisonment to the presidency and his fight against apartheid.",
      },
      {
        id: 3,
        name: "Becoming",
        price: 14.99,
        ISBN: "978-1524763138",
        year: 2018,
        author: "Michelle Obama",
        image: "https://example.com/book3.jpg",
        description:
          "Michelle Obama's memoir, chronicling her life from her childhood on the South Side of Chicago to her years as First Lady of the United States.",
      },
      {
        id: 4,
        name: "The Autobiography of Malcolm X",
        price: 11.99,
        ISBN: "978-0345350688",
        year: 1965,
        author: "Malcolm X",
        image: "https://example.com/book4.jpg",
        description:
          "The autobiography of civil rights activist Malcolm X, tracing his journey from his troubled youth to his leadership in the Nation of Islam and his eventual conversion to Sunni Islam.",
      },
      {
        id: 5,
        name: "I Know Why the Caged Bird Sings",
        price: 10.99,
        ISBN: "978-0345514400",
        year: 1969,
        author: "Maya Angelou",
        image: "https://example.com/book5.jpg",
        description:
          "Maya Angelou's memoir, depicting her early years, including her experiences with racism, trauma, and her journey towards self-discovery and empowerment.",
      },
      {
        id: 6,
        name: "Educated",
        price: 13.99,
        ISBN: "978-0399590504",
        year: 2018,
        author: "Tara Westover",
        image: "https://example.com/book6.jpg",
        description:
          "Tara Westover's memoir, recounting her upbringing in a strict and abusive household in rural Idaho, and her quest for education and self-liberation.",
      },
      {
        id: 7,
        name: "The Story of My Experiments with Truth",
        price: 8.99,
        ISBN: "978-0486245935",
        year: 1927,
        author: "Mahatma Gandhi",
        image: "https://example.com/book7.jpg",
        description:
          "Mahatma Gandhi's autobiography, detailing his spiritual and political journey in India's struggle for independence and his philosophy of nonviolent resistance.",
      },
      {
        id: 8,
        name: "Angela's Ashes",
        price: 9.99,
        ISBN: "978-0684842677",
        year: 1996,
        author: "Frank McCourt",
        image: "https://example.com/book8.jpg",
        description:
          "Frank McCourt's memoir, recounting his impoverished childhood in Brooklyn and Ireland, and his eventual journey to America.",
      },
      {
        id: 9,
        name: "Night",
        price: 7.99,
        ISBN: "978-0374500016",
        year: 1956,
        author: "Elie Wiesel",
        image: "https://example.com/book9.jpg",
        description:
          "Elie Wiesel's memoir, describing his experiences as a Jewish teenager during the Holocaust, including his time at Auschwitz and Buchenwald concentration camps.",
      },
      {
        id: 10,
        name: "The Glass Castle",
        price: 10.99,
        ISBN: "978-0743247542",
        year: 2005,
        author: "Jeannette Walls",
        image: "https://example.com/book10.jpg",
        description:
          "Jeannette Walls' memoir, depicting her unconventional upbringing by her dysfunctional and impoverished parents and her journey towards self-reliance and success.",
      },
      {
        id: 11,
        name: "The Diary of a Young Girl",
        price: 9.99,
        ISBN: "978-0553577129",
        year: 1947,
        author: "Anne Frank",
        image: "https://example.com/book11.jpg",
        description:
          "The diary of Anne Frank, a Jewish girl hiding from the Nazis during World War II, providing a powerful and personal account of her experiences.",
      },
      {
        id: 12,
        name: "Long Walk to Freedom",
        price: 12.99,
        ISBN: "978-0316548182",
        year: 1994,
        author: "Nelson Mandela",
        image: "https://example.com/book12.jpg",
        description:
          "The autobiography of Nelson Mandela, South Africa's first black president, detailing his journey from imprisonment to the presidency and his fight against apartheid.",
      },
      {
        id: 13,
        name: "Becoming",
        price: 14.99,
        ISBN: "978-1524763138",
        year: 2018,
        author: "Michelle Obama",
        image: "https://example.com/book13.jpg",
        description:
          "Michelle Obama's memoir, chronicling her life from her childhood on the South Side of Chicago to her years as First Lady of the United States.",
      },
      {
        id: 14,
        name: "The Autobiography of Malcolm X",
        price: 11.99,
        ISBN: "978-0345350688",
        year: 1965,
        author: "Malcolm X",
        image: "https://example.com/book14.jpg",
        description:
          "The autobiography of civil rights activist Malcolm X, tracing his journey from his troubled youth to his leadership in the Nation of Islam and his eventual conversion to Sunni Islam.",
      },
      {
        id: 15,
        name: "I Know Why the Caged Bird Sings",
        price: 10.99,
        ISBN: "978-0345514400",
        year: 1969,
        author: "Maya Angelou",
        image: "https://example.com/book15.jpg",
        description:
          "Maya Angelou's memoir, depicting her early years, including her experiences with racism, trauma, and her journey towards self-discovery and empowerment.",
      },
      {
        id: 16,
        name: "Educated",
        price: 13.99,
        ISBN: "978-0399590504",
        year: 2018,
        author: "Tara Westover",
        image: "https://example.com/book16.jpg",
        description:
          "Tara Westover's memoir, recounting her upbringing in a strict and abusive household in rural Idaho, and her quest for education and self-liberation.",
      },
      {
        id: 17,
        name: "The Story of My Experiments with Truth",
        price: 8.99,
        ISBN: "978-0486245935",
        year: 1927,
        author: "Mahatma Gandhi",
        image: "https://example.com/book17.jpg",
        description:
          "Mahatma Gandhi's autobiography, detailing his spiritual and political journey in India's struggle for independence and his philosophy of nonviolent resistance.",
      },
      {
        id: 18,
        name: "Angela's Ashes",
        price: 9.99,
        ISBN: "978-0684842677",
        year: 1996,
        author: "Frank McCourt",
        image: "https://example.com/book18.jpg",
        description:
          "Frank McCourt's memoir, recounting his impoverished childhood in Brooklyn and Ireland, and his eventual journey to America.",
      },
      {
        id: 19,
        name: "Night",
        price: 7.99,
        ISBN: "978-0374500016",
        year: 1956,
        author: "Elie Wiesel",
        image: "https://example.com/book19.jpg",
        description:
          "Elie Wiesel's memoir, describing his experiences as a Jewish teenager during the Holocaust, including his time at Auschwitz and Buchenwald concentration camps.",
      },
      {
        id: 20,
        name: "The Glass Castle",
        price: 10.99,
        ISBN: "978-0743247542",
        year: 2005,
        author: "Jeannette Walls",
        image: "https://example.com/book20.jpg",
        description:
          "Jeannette Walls' memoir, depicting her unconventional upbringing by her dysfunctional and impoverished parents and her journey towards self-reliance and success.",
      },
    ],
  },
  {
    id: 10,
    category: "Self-Help",
    image:
      "https://fourminutebooks.com/wp-content/uploads/2020/11/self-help-books-7.jpg",
    books: [
      {
        id: 1,
        name: "The 7 Habits of Highly Effective People",
        price: 15.99,
        ISBN: "978-0-7432-6951-3",
        year: 1989,
        author: "Stephen R. Covey",
        image: "https://example.com/book1.jpg",
        description:
          "A classic self-help book that presents seven habits for personal and professional success.",
      },
      {
        id: 2,
        name: "Atomic Habits",
        price: 12.99,
        ISBN: "978-0-7352-3068-2",
        year: 2018,
        author: "James Clear",
        image: "https://example.com/book2.jpg",
        description:
          "A practical guide to breaking bad habits and building good ones with small incremental changes.",
      },
      {
        id: 3,
        name: "The Subtle Art of Not Giving a F*ck",
        price: 9.99,
        ISBN: "978-0-06-245771-4",
        year: 2016,
        author: "Mark Manson",
        image: "https://example.com/book3.jpg",
        description:
          "A counterintuitive approach to living a good life by focusing on what truly matters and letting go of the rest.",
      },
      {
        id: 4,
        name: "Mindset: The New Psychology of Success",
        price: 14.99,
        ISBN: "978-1-59463-200-7",
        year: 2006,
        author: "Carol S. Dweck",
        image: "https://example.com/book4.jpg",
        description:
          "Explores the concept of mindset and how it can influence personal and professional success.",
      },
      {
        id: 5,
        name: "Man's Search for Meaning",
        price: 11.99,
        ISBN: "978-0-8070-1429-5",
        year: 1946,
        author: "Viktor E. Frankl",
        image: "https://example.com/book5.jpg",
        description:
          "An inspirational account of Viktor Frankl's experiences in Nazi concentration camps and his insights on finding meaning in life.",
      },
      {
        id: 6,
        name: "Daring Greatly",
        price: 13.99,
        ISBN: "978-1-59184-776-4",
        year: 2012,
        author: "Brené Brown",
        image: "https://example.com/book6.jpg",
        description:
          "Encourages vulnerability and wholeheartedness as a path to courage and connection.",
      },
      {
        id: 7,
        name: "The Power of Now",
        price: 10.99,
        ISBN: "978-1-57731-152-3",
        year: 1997,
        author: "Eckhart Tolle",
        image: "https://example.com/book7.jpg",
        description:
          "Explores the concept of living in the present moment to find inner peace and fulfillment.",
      },
      {
        id: 8,
        name: "How to Win Friends and Influence People",
        price: 9.99,
        ISBN: "978-0-671-70881-7",
        year: 1936,
        author: "Dale Carnegie",
        image: "https://example.com/book8.jpg",
        description:
          "Provides practical advice on building relationships, improving communication, and influencing others positively.",
      },
      {
        id: 9,
        name: "Thinking, Fast and Slow",
        price: 12.99,
        ISBN: "978-0-374-53355-7",
        year: 2011,
        author: "Daniel Kahneman",
        image: "https://example.com/book9.jpg",
        description:
          "Explores the two systems of thinking that drive our decisions and the biases that affect our judgment.",
      },
      {
        id: 10,
        name: "The 4-Hour Workweek",
        price: 11.99,
        ISBN: "978-0-307-35313-9",
        year: 2007,
        author: "Timothy Ferriss",
        image: "https://example.com/book10.jpg",
        description:
          "Presents strategies for escaping the 9-5 grind, automating businesses, and achieving lifestyle design.",
      },
      {
        id: 11,
        name: "Grit: The Power of Passion and Perseverance",
        price: 14.99,
        ISBN: "978-1-101-88576-4",
        year: 2016,
        author: "Angela Duckworth",
        image: "https://example.com/book11.jpg",
        description:
          "Explores the importance of passion and perseverance in achieving long-term goals and success.",
      },
      {
        id: 12,
        name: "The Alchemist",
        price: 8.99,
        ISBN: "978-0-06-231500-7",
        year: 1988,
        author: "Paulo Coelho",
        image: "https://example.com/book12.jpg",
        description:
          "A fable about following one's dreams and finding personal legend, reminding readers of the importance of listening to their hearts.",
      },
      {
        id: 13,
        name: "Emotional Intelligence: Why It Can Matter More Than IQ",
        price: 12.99,
        ISBN: "978-0-553-38371-3",
        year: 1995,
        author: "Daniel Goleman",
        image: "https://example.com/book13.jpg",
        description:
          "Explores the concept of emotional intelligence and its impact on personal and professional success.",
      },
      {
        id: 14,
        name: "The Miracle Morning",
        price: 9.99,
        ISBN: "978-1-61499-723-6",
        year: 2012,
        author: "Hal Elrod",
        image: "https://example.com/book14.jpg",
        description:
          "Introduces a morning routine that can transform your life by improving productivity, focus, and overall well-being.",
      },
      {
        id: 15,
        name: "Influence: The Psychology of Persuasion",
        price: 11.99,
        ISBN: "978-0-06-124189-5",
        year: 1984,
        author: "Robert B. Cialdini",
        image: "https://example.com/book15.jpg",
        description:
          "Reveals the psychological principles behind persuasion and how they can be used ethically in various settings.",
      },
      {
        id: 16,
        name: "Quiet: The Power of Introverts in a World That Can't Stop Talking",
        price: 10.99,
        ISBN: "978-0-307-35214-9",
        year: 2012,
        author: "Susan Cain",
        image: "https://example.com/book16.jpg",
        description:
          "Celebrates the power and unique strengths of introverts in a society that often values extroverted traits.",
      },
      {
        id: 17,
        name: "The Gifts of Imperfection",
        price: 8.99,
        ISBN: "978-1-59285-849-1",
        year: 2010,
        author: "Brené Brown",
        image: "https://example.com/book17.jpg",
        description:
          "Explores the importance of embracing imperfections and living wholeheartedly by cultivating courage, compassion, and connection.",
      },
      {
        id: 18,
        name: "Meditations",
        price: 7.99,
        ISBN: "978-0-14-044933-4",
        year: 180,
        author: "Marcus Aurelius",
        image: "https://example.com/book18.jpg",
        description:
          "A collection of personal reflections and stoic philosophy from the Roman Emperor Marcus Aurelius.",
      },
      {
        id: 19,
        name: "The Happiness Advantage",
        price: 12.99,
        ISBN: "978-0-307-45249-6",
        year: 2010,
        author: "Shawn Achor",
        image: "https://example.com/book19.jpg",
        description:
          "Explores the connection between happiness and success, offering strategies to cultivate a positive mindset.",
      },
      {
        id: 20,
        name: "You Are a Badass",
        price: 9.99,
        ISBN: "978-0-7624-5243-7",
        year: 2013,
        author: "Jen Sincero",
        image: "https://example.com/book20.jpg",
        description:
          "Motivational advice to help readers identify and overcome self-sabotaging beliefs and live a life they love.",
      },
    ],
  },
  {
    id: 11,
    category: "Business",
    image:
      "https://kinsta.com/wp-content/uploads/2021/10/think-and-grow-rich-book.jpg",
    books: [
      {
        id: 1,
        name: "The Lean Startup",
        price: 15.99,
        ISBN: "9780307887894",
        year: 2011,
        author: "Eric Ries",
        image: "https://example.com/the-lean-startup.jpg",
        description:
          "This book introduces the concept of the lean startup methodology which emphasizes iterative product development and validated learning to build successful businesses",
      },
      {
        id: 2,
        name: "Zero to One",
        price: 14.99,
        ISBN: "9780804139298",
        year: 2014,
        author: "Peter Thiel, Blake Masters",
        image: "https://example.com/zero-to-one.jpg",
        description:
          "In this book Peter Thiel shares his insights on how to build and create successful companies by focusing on innovation and unique ideas.",
      },
      {
        id: 3,
        name: "Thinking, Fast and Slow",
        price: 12.99,
        ISBN: "9780374533557",
        year: 2011,
        author: "Daniel Kahneman",
        image: "https://example.com/thinking-fast-and-slow.jpg",
        description:
          "Nobel laureate Daniel Kahneman explores the two systems of thinking that drive our decisions and how understanding them can improve our judgment in business and life.",
      },
      {
        id: 4,
        name: "Good to Great",
        price: 13.99,
        ISBN: "9780066620992",
        year: 2001,
        author: "Jim Collins",
        image: "https://example.com/good-to-great.jpg",
        description:
          "This book examines why some companies make the leap from being good to becoming great and provides insights into the strategies and practices that contribute to their success.",
      },
      {
        id: 5,
        name: "The Innovator's Dilemma",
        price: 11.99,
        ISBN: "9781633691780",
        year: 1997,
        author: "Clayton M. Christensen",
        image: "https://example.com/the-innovators-dilemma.jpg",
        description:
          "Clayton M. Christensen explores the concept of disruptive innovation and its impact on established companies, providing guidance on how to navigate and adapt to disruptive change.",
      },
      {
        id: 6,
        name: "Start with Why",
        price: 10.99,
        ISBN: "9781591846444",
        year: 2009,
        author: "Simon Sinek",
        image: "https://example.com/start-with-why.jpg",
        description:
          "Simon Sinek presents the idea that successful businesses and leaders start with a clear understanding of their 'why' or purpose, which inspires and influences their actions.",
      },
      {
        id: 7,
        name: "The 7 Habits of Highly Effective People",
        price: 9.99,
        ISBN: "9781982137274",
        year: 1989,
        author: "Stephen R. Covey",
        image:
          "https://example.com/the-7-habits-of-highly-effective-people.jpg",
        description:
          "This book provides a holistic approach to personal and professional effectiveness, outlining seven habits that can help individuals become more productive and successful.",
      },
      {
        id: 8,
        name: "Thinking in Systems",
        price: 12.99,
        ISBN: "9781603580557",
        year: 2008,
        author: "Donella H. Meadows",
        image: "https://example.com/thinking-in-systems.jpg",
        description:
          "Donella H. Meadows introduces systems thinking as a way to understand and solve complex problems in business and society, emphasizing the interconnectedness of systems.",
      },
      {
        id: 9,
        name: "The Art of War",
        price: 8.99,
        ISBN: "9781599869773",
        year: 500,
        author: "Sun Tzu",
        image: "https://example.com/the-art-of-war.jpg",
        description:
          "This ancient Chinese military treatise offers strategic insights that can be applied to business, emphasizing the importance of planning, leadership, and understanding the competition.",
      },
      {
        id: 10,
        name: "The Four Hour Work Week",
        price: 11.99,
        ISBN: "9780307465351",
        year: 2007,
        author: "Timothy Ferriss",
        image: "https://example.com/the-four-hour-work-week.jpg",
        description:
          "Timothy Ferriss shares his approach to escaping the 9-5 grind and designing a lifestyle that emphasizes freedom and work-life balance through entrepreneurship and automation.",
      },
      {
        id: 11,
        name: "Lean Analytics",
        price: 14.99,
        ISBN: "9781449335670",
        year: 2013,
        author: "Alistair Croll, Benjamin Yoskovitz",
        image: "https://example.com/lean-analytics.jpg",
        description:
          "This book introduces the concept of lean analytics and provides practical guidance on how to use data and metrics to build, measure, and improve successful businesses.",
      },
      {
        id: 12,
        name: "The Innovator's Solution",
        price: 13.99,
        ISBN: "9781633692879",
        year: 2003,
        author: "Clayton M. Christensen, Michael E. Raynor",
        image: "https://example.com/the-innovators-solution.jpg",
        description:
          "Building upon 'The Innovator's Dilemma,' this book offers a framework for creating disruptive innovations and provides examples of successful strategies for growth.",
      },
      {
        id: 13,
        name: "Thinking, Fast and Slow",
        price: 12.99,
        ISBN: "9780374533557",
        year: 2011,
        author: "Daniel Kahneman",
        image: "https://example.com/thinking-fast-and-slow.jpg",
        description:
          "Nobel laureate Daniel Kahneman explores the two systems of thinking that drive our decisions and how understanding them can improve our judgment in business and life.",
      },
      {
        id: 14,
        name: "Crushing It!",
        price: 10.99,
        ISBN: "9780062674678",
        year: 2018,
        author: "Gary Vaynerchuk",
        image: "https://example.com/crushing-it.jpg",
        description:
          "Gary Vaynerchuk shares insights and strategies for leveraging social media and the internet to build a personal brand and succeed in business in the digital age.",
      },
      {
        id: 15,
        name: "The E-Myth Revisited",
        price: 9.99,
        ISBN: "9780062695185",
        year: 1995,
        author: "Michael E. Gerber",
        image: "https://example.com/the-e-myth-revisited.jpg",
        description:
          "This book dispels common myths about entrepreneurship and offers guidance on how to build a successful small business by focusing on systems and processes.",
      },
      {
        id: 16,
        name: "Originals: How Non-Conformists Move the World",
        price: 11.99,
        ISBN: "9780525429562",
        year: 2016,
        author: "Adam Grant",
        image: "https://example.com/originals.jpg",
        description:
          "Adam Grant explores the qualities and behaviors of original thinkers and provides insights on how to champion new ideas and drive positive change in organizations.",
      },
      {
        id: 17,
        name: "Thinking, Fast and Slow",
        price: 12.99,
        ISBN: "9780374533557",
        year: 2011,
        author: "Daniel Kahneman",
        image: "https://example.com/thinking-fast-and-slow.jpg",
        description:
          "Nobel laureate Daniel Kahneman explores the two systems of thinking that drive our decisions and how understanding them can improve our judgment in business and life.",
      },
      {
        id: 18,
        name: "The Power of Habit",
        price: 10.99,
        ISBN: "9780812981605",
        year: 2012,
        author: "Charles Duhigg",
        image: "https://example.com/the-power-of-habit.jpg",
        description:
          "This book explores the science behind habit formation and provides insights on how to harness the power of habits to improve productivity, performance, and success.",
      },
      {
        id: 19,
        name: "Shoe Dog",
        price: 13.99,
        ISBN: "9781501135927",
        year: 2016,
        author: "Phil Knight",
        image: "https://example.com/shoe-dog.jpg",
        description:
          "Phil Knight, co-founder of Nike, shares the story of how he built the iconic company, overcoming challenges and sharing valuable lessons in entrepreneurship.",
      },
      {
        id: 20,
        name: "Leaders Eat Last",
        price: 11.99,
        ISBN: "9781591848011",
        year: 2014,
        author: "Simon Sinek",
        image:
          "https://www.hollywoodreporter.com/wp-content/uploads/2013/09/to_kill_a_mocking_bird.jpg?w=1024",
        description:
          "Simon Sinek explores the importance of trust and leadership in organizations and provides insights on how to create a culture of collaboration and success.",
      },
    ],
  },
  {
    id: 12,
    category: "Travel",
    image:
      "https://vader-prod.s3.amazonaws.com/1636727908-here-there-elsewhere-stories-from-the-road-by-william-least-heat-moon-1636727894.jpg",
    books: [],
  },
  // { id: 13, category: "Poetry", books: [] },
  // { id: 14, category: "Young Adult", books: [] },
  // { id: 15, category: "Children's", books: [] },
  // { id: 16, category: "Horror", books: [] },
  // { id: 17, category: "Science", books: [] },
  // { id: 18, category: "Philosophy", books: [] },
  // { id: 19, category: "Fiction", books: [] },
  // { id: 20, category: "Art", books: [] },
  // { id: 21, category: "Cooking", books: [] },
];
export default BookData;
