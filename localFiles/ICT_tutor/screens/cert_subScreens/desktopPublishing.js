import React, {Component} from "react";
import { View, StyleSheet, Text, Image, Platform} from "react-native";
import {WebView} from 'react-native-webview';
const WebPage = `
<html>
    <body style = "padding: 0px; background-color: #dfdfdf">
    <div class="parag1">
        <strong> Desktop publishing (DTP) </strong> is the use of the computer and software to create visual displays of ideas and information. Desktop publishing documents may be for desktop or commercial printing or electronic distribution, including PDF, slideshows, email newsletters, electronic books, and the Web. 
        <p> Desktop publishing is a term coined after the development of a specific type of software. It's about using that software to combine and rearrange text and images and creating digital files for print, online viewing, or websites. Before the invention of desktop publishing software, the tasks involved in desktop publishing were done manually by people who specialized in graphic design, typesetting, and prepress tasks.</p>
        <h4>Things You Can Do With Desktop Publishing </h4>
        With desktop publishing software and hardware you can:
        <ul>
            <li>
                Design print communications such as brochures, fliers, ads, and posters.
            </li>
            <li>
                Design print communications such as catalogs, directories, and annual reports.
            </li>
            <li>
                Design logos, business cards, and letterhead.
            </li>
            <li>
                Convert print communications to formats for the web and smart devices such as tablets and phones.
            </li>
            <li>
                Create resumes and business forms including invoices, inventory sheets, memos, and labels.
            </li>
            <li>
                Self-publish books, newsletters, and e-books.
            </li>
            <li>
                Design and publish blogs and websites.
            </li>
            <li>
                Design slides shows, presentations, and handouts.
            </li>
            <li>
                Create and print greeting cards, banners, postcards, candy wrappers, and iron-on transfers.
            </li>
            <li>
                Make digital scrapbooks and print or digital photo albums.
            </li>
            <li>
                Create decorative labels, envelopes, trading cards, calendars, and charts.
            </li>
            <li>
                Design packaging for retail merchandise from wrappers for bars of soap to software boxes.
            </li>
            <li>
                Design store signs, highway signs, and billboards.
            </li>
            <li>
                Take work designed by others and putting it into the correct format for digital or offset printing or for publishing online.
            </li>
            <li>
                Create more attractive, readable reports, posters, and print or on-screen presentations for school or business.
            </li>   
        </ul>
        <b>How Desktop Publishing Has Changed</b><br>
        In the '80s and '90s, desktop publishing was for print almost exclusively. Today, desktop publishing includes much more than just print publications. It's publishing as PDF or an e-book. It's publishing to blogs and designing websites. It's designing content for multiple platforms, including smartphones and tablets. 
        <p>Desktop publishing is the technical assembly of digital files in the proper format for printing or for electronic distribution. In practical use, much of the graphic design process is also accomplished using desktop publishing, ​graphics software, and web design software and is sometimes included in the definition of desktop publishing.</p>
        <i>Comparison of desktop publishing, graphic design, and web design:</i>
        <ul>
            <li>
                <b>Desktop publishing </b>is the process of using the computer and specific types of software to combine text and graphics to produce documents such as newsletters, brochures, books, and web pages.
            </li>
            <li>
                <b>Graphic design</b> uses text and graphics to communicate an effective message in the design of logos, graphics, brochures, newsletters, posters, signs, and other types of visual communication.
            </li>
            <li>
                <b>Web design</b> is a spin-off of graphic design and desktop publishing that focuses exclusively on visual communications for display on websites and mobile devices – to include text, graphics, sound, animation, and video. 
            </li>
        </ul>
        Someone who does print design may or may not also do web design. Some web designers have never done any type of print design. 
        <p><b>The Present and Future of Desktop Publishing</b></p>
        At one time, only professional graphic designers used desktop publishing software. Then along came consumer-level desktop publishing software and an explosion of people who did desktop publishing for fun and profit, with or without a background in traditional design. Today, desktop publishing is still a career choice for some, but it is also increasingly a required skill for a wide range of jobs and careers. 
        <hr>
  <b>EXERCISES</b><br>
    Refer to Exercise: <strong>CD301</strong></br>
    </div>
        <div class="footer">Copy right @ Tivkpaa Modern Tech. 2020</div>
    <style>
        .parag1{
          font-size: 35pt; margin: 1rem; text-align: justify; line-height: 4rem;
        }
        .footer{
          background-color: #000; color: #fff; text-align: center; height: 5rem; padding-top: 2rem; font-size: 18pt;
        }
    </style>
    </body>
</html>

`;
//desktopPublishing

function desktopPublishing() {
  return (
    <WebView
      originWhitelist={["*"]}
      startInLoadingState={true}
      source={{html: WebPage }}
      style={{ flex: 1 }}
      allowFileAccess={true}
      domStorageEnabled={true}
      allowFileAccessFromFileURLs={true}
      allowUniversalAccessFromFileURLs={true}
      scalesPageToFit={true} />
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default desktopPublishing;