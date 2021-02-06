import React, {Component} from "react";
import { View, StyleSheet, Text, Image, Platform} from "react-native";
import {WebView} from 'react-native-webview';
const WebPage = `
    <body style = "padding: 0px; background-color: #dfdfdf" >
            <div class="parag1">
            <b>Introduction</b><br>
            Microsoft Office (or simply Office) is a family of server software, and services developed
            by Microsoft. It was first announced by Bill Gates on August 1, 1988, in Las Vegas.The first
            version of Office contained Microsoft Word, Microsoft Excel, and Microsoft PowerPoint. Over
            the years, Office applications have grown substantially closer with shared features such as a
            common spell checker, data integration etc. Office is produced in several versions targeted
            towards different end-users and computing environments. The original, and most widely used version, is the desktop version, available for PCs running the Windows, Linux and Mac OS operating systems. 
            Office Online is a version of the software that runs within a web browser, while Microsoft also maintains Office apps for Android and iOS.
            <hr>
            Microsoft Office is a suite of desktop productivity applications that is designed specifically to be
            used for office or business use.It is a proprietary product of Microsoft Corporation and was first
            released in 1990. Microsoft Office is available in 35 different languages and is supported by
            Windows, Mac and most Linux variants. It mainly consists of Word, Excel, PowerPoint, Access,
            OneNote, Outlook and Publisher applications. 
            <hr>
            Microsoft Word is one of the most popular word processing programs supported by both Mac and PC
            platforms. Microsoft Word can be used to create documents, brochures, leaflets, outlines, resumes, lists, and
            simple web pages.
            <hr>
            <p>
                <b>We will be covering the following in the cause of this course:</b>
                <ol>
                    <li>Getting Started</li>
                    <li>Saving the Document</li>
                    <li>Toolbars</li>
                    <li>Formatting</li>
                    <li>Inserting and Adding Objects</li>
                    <li>Printing</li>
                    <li>Other Helpful Functions</li>
                    <li>Shortcut Keys for Microsoft Office</li>
                </ol>
            </p>
            <p>
            <b>1. GETTING STARTED</b><br>
                To launch Microsoft Word, Click on <b>Start Menu</b> > <b>All Programs</b> > <b>Microsoft Office</b> > <b> Microsoft Word</b> (or you can simply <b>Double Click</b> on the MS-Word Office Icon on you Computer <b>Desktop</b>). A blank Word document will open.
            </p>
            <p>
                Once you open word, you will see a screen to select which type of document you would like to launch. You can choose the Blank Document option for a blank sheet of paper. You also can choose from one of the template options that match what you are planning to working on (Figure 2).
            </p>
<p><b>EXERCISES</b><br>
    Refer to Exercise: <strong>CM501</strong></p>
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
`;
function microsoft() {
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

export default microsoft;