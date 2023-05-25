import Head from "next/head";
import { Axios } from "../utils/axios";

const ComicUrl = "http://localhost:8000/sitemap/comics"; // ComicEndPoint
const chapterUrl = "http://localhost:8000/sitemap/chapters";
const siteURL = "https://diasterscans.com";

function generateSiteMap(comics, chapters) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>${siteURL}</loc>
     </url>
     <url>
       <loc>${siteURL}/home</loc>
     </url>
     <url>
       <loc>${siteURL}/comics</loc>
     </url>
     <url>
       <loc>${siteURL}/about</loc>
     </url>
     <url>
       <loc>${siteURL}/privacy</loc>
     </url>
     <url>
       <loc>${siteURL}/dmca</loc>
     </url>
     <url>
       <loc>${siteURL}/log-in</loc>
     </url>
     <url>
       <loc>${siteURL}/register</loc>
     </url>
     ${
       comics &&
       comics
         .map(({ id, ComicTitle }) => {
           const urlName = ComicTitle.toLowerCase().split(" ").join("-");
           return `
       <url>
           <loc>${`${siteURL}/comics/${id}-${urlName}`}</loc>
       </url>
     `;
         })
         .join("")
     }
     ${
       chapters &&
       chapters.map(({ chapterID, ComicTitle, comicID, ChapterNumber }) => {
         const urlName = ComicTitle.toLowerCase().split(" ").join("-");

         return `
        <url>
           <loc>${siteURL}/comics/${comicID}-${urlName}/${chapterID}-chapter-${ChapterNumber}</loc>
       </url>
        `;
       })
     }
   </urlset>
 `;
}

function SiteMap() {}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await Axios.get(ComicUrl);
  const comics = await request.data;

  const chapterRequest = await Axios.get(chapterUrl);
  const chapters = await chapterRequest.data;

  // We generate the XML sitemap with the comics data
  const sitemap = generateSiteMap(comics, chapters);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
