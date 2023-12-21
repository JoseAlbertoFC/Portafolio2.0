import BSBlack from "../images/black-background.jpg"
import BSWhite from "../images/white-background.jpg"
import Flags from "../images/Mundo_hecho_de_Banderas.gif"
import GoTrip from "../images/goTrip.jpg"

const Data = [
  {
    id: 1,
    image: BSBlack,
    name: "BookStore Backend",
    colaborators:
      "Daniel Luevano, Sasha Camargo, Enzo Magurno, Santiago Soto, Alejandro Aranguren, Nazareno Lujan, Brandon Galarza, José Fuenmayor",
    tecnologies:
      "Javascript | Express| JWT | MercadoPago | Stripe | Nodemailer | PostgreSQL | Sequelize",
    description:
      "This is the API belonging to the BookStore project, which is an e-book e-commerce platform. It features routes to provide user information, books, comments, and ratings. Additionally, it has routes for soft deletion, payment gateways, email notifications, and other functionalities.",
    url: "https://github.com/JoseAlbertoFC/BookStorePF",
  },

  {
    id: 2,
    image: BSWhite,
    name: "BookStore Frontend",
    colaborators:
      "Daniel Luevano, Sasha Camargo, Enzo Magurno, Santiago Soto, Alejandro Aranguren, Nazareno Lujan, Brandon Galarza, José Fuenmayor",
    tecnologies:
      "Javascript | React | Redux | GoogleAuth | Cloudinary | CSS | LandBot",
    description:
      "This is the Client for the BookStore project, which is an e-commerce platform for e-books. It includes a home view, various filters, a shopping cart, a wish list, and an admin dashboard. The dashboard allows you to view earnings and books sold on a weekly, monthly, and yearly basis, as well as the ability to disable users and books. Additionally, the user interface provides book details, a rating system, and comments. You can register and log in through a form, which sends a verification email, or register directly with Google",
    url: "https://book-store-client-coral.vercel.app/",
  },

  {
    id: 3,
    image: Flags,
    name: "Fun with Flags!",
    colaborators: "José Fuenmayor",
    tecnologies:
      "Javascript | CSS | React | Redux | Express | PostgreSQL | Sequelize",
    description:
      "This was my first academic project, which helped strengthen my technical skills. It has both a Frontend and Backend. It is an interactive country guide that allows sorting countries by population and alphabetical order. It also enables filtering by continent and offers activities associated with each country. It includes a real-time JavaScript-validated form to associate various activities with the selected country.",
    url: "https://github.com/JoseAlbertoFC/PI-Countries",
  },

  {
    id: 4,
    image: GoTrip,
    name: "GoTrip Backend",
    colaborators:
      "Alejandro Aranguren, Santiago Soto, Daniel Luevano, José Fuenmayor",
    tecnologies:
      "Javascript | Express | JWT | Nodemailer | Cloudinary | PostgreSQL | Sequelize | GoogleAuth | MercadoPago",
    description:
      "This was my first academic project, which helped strengthen my technical skills. It has both a Frontend and Backend. It is an interactive country guide that allows sorting countries by population and alphabetical order. It also enables filtering by continent and offers activities associated with each country. It includes a real-time JavaScript-validated form to associate various activities with the selected country.",
    url: "https://github.com/JoseAlbertoFC/gotripPF",
  },
];

export default Data;
