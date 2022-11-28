import { createBrowserRouter } from "react-router-dom";
import { TeslaNews } from "../components/TeslaNews";
import env from "react-dotenv";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <TeslaNews
        api={`https://newsapi.org/v2/everything?q=tesla&from=2022-10-28&sortBy=publishedAt&apiKey=${env.REACT_APP_API_KEY}`}
      />
    ),
  },
  {
    path: "/apple",
    element: (
      <TeslaNews
        api={`
        https://newsapi.org/v2/everything?q=apple&from=2022-11-26&to=2022-11-26&sortBy=popularity&apiKey=${env.REACT_APP_API_KEY}`}
      />
    ),
  },
  {
    path: "/usbusiness",
    element: (
      <TeslaNews
        api={`
        https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${env.REACT_APP_API_KEY}`}
      />
    ),
  },
  {
    path: "/techcrunch",
    element: (
      <TeslaNews
        api={`
        https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${env.REACT_APP_API_KEY}`}
      />
    ),
  },
  {
    path: "/wallstreetjournal",
    element: (
      <TeslaNews
        api={`
        https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${env.REACT_APP_API_KEY}`}
      />
    ),
  },
]);

export default router;
