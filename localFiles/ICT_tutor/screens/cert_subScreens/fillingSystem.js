import React, {Component} from "react";
import { View, StyleSheet, Text, Image, Platform} from "react-native";
import {WebView} from 'react-native-webview';
const WebPage = `
<html>
  <body style = "padding: 0px; background-color: #dfdfdf">
  <div class="parag1">
    <h4>What Is an Electronic Filing System?</h4>
    An electronic filing system makes organizing your files easy by automating many features. Here's how to implement one in your business.
    <p>
      Keeping your documents organized in today's super-digitized, speedy world can be difficult and time-consuming. Whether you use local storage on your computers or mobile devices, or the increasingly popular cloud storage option, it's important to implement a computerized filing system that enables your business to create, store, manage, and share documents and other files with ease.
      This article will explain what a computerized filing system is, how it differs from a traditional filing system and how you can create an electronic filing system for your business.
    </p>
    <b>What is a computerized filing system?</b>
    <p> A computerized or electronic filing system organizes and stores your business's files on a hard drive or network space. The system can be software- or internet-based, or a simple desktop folder/file system on a computer.</p>
    <strong>Why are computerized filing systems used?</strong>
    <p>The primary reason why people use a computerized filing system is it's an easy way to safely store and organize files. This organization largely comes in the form of indexing, which categorizes and registers every document entered into the system based on specific properties that you can customize, such as file size or function.
      Computerized systems also offer greater options for securing your files and sharing them, making it easier for team members to collaborate on shared documents.</p>
  <p><b>Differences between traditional and computerized databases</b></p>
  <p>Traditional systems are generally paper-based and manually organized, whereas electronic systems – as the name suggests – are digital, with documents organized and stored digitally.</p>
  <p>Traditional filing systems tend to take up a lot of physical space – all of those papers require boxes or filing cabinets to store them – and these systems are susceptible to physical damage like fading, fire, flooding or other damage.</p>
  <p>Computerized or electronic filing systems are generally more budget-friendly, they free up physical space, and offer many benefits that help you organize your documents and share them across your company with ease.</p>
  <p>Switching from a traditional to a computerized filing system can greatly increase your system 's functionality by automating many aspects of the process, like indexing and tracking.</p>
  <p><b>Benefits of a computerized filing system</b></p>
  Here are seven ways that implementing a digital filing system can help your business manage documents more efficiently.
  <p>
    <ol>
      <li>
        <b>Automatic indexing:</b> Indexing registers, categorizes, and then organizes files based on specific criteria that you can customize, such as file function or size, making it easy to retrieve and organize documents.
      </li>
      <li>
        <b>Security:</b> Electronic filing helps protect your information since a data breach or storage issue could be disastrous for your business. Using a computerized filing system provides safeguards such as managed access control, audit trails, automatic backups and password protection. If a disaster strikes, like a fire or flood, your files are stored safely in the cloud, away from physical harm.
      </li>
      <li>
        <b>Regulatory compliance support:</b> If you operate in a regulated industry, such as healthcare, electronic filing offers regulatory compliance support for HIPAA, Sarbanes-Oxley, Good Manufacturing Practices by the FDA or ISO 9000/9001. This capability provides your business with invaluable protection and peace of mind as you process critical or sensitive documents.
      </li>
      <li>
        <b>Scalability:</b> A major benefit of computerized filing versus traditional filing is the ability to scale, or grow, the system alongside your business. Think about which advanced features you'll want as your business grows. It is important that you choose software that grows with your business so you do not have to go through the process of switching software.
      </li>
      <li>
        <b>Collaboration:</b> An electronic filing system makes it simple for users to share and collaborate on documents. Look for tools such as live editing, file sharing, plugin integrations and access restriction.
      </li>
      <li>
        <b>Integrations:</b> If your business uses a CRM application or ERP database, look for filing software that integrates with these programs – this will make your daily life much easier. Of course, you can use filing software that does not integrate with your CRM or ERP, but it may limit your workflow capabilities; that is, it may inhibit your team's ability to access, edit, back up, and monitor documents that are created within your CRM or ERP. Many document management solutions integrate with email programs such as Microsoft Outlook. 
      </li>
      <li>
        <b>Quick, easy document retrieval:</b> Searching for the right document – when you have an entire business's worth to go through – can be a nightmare and can even cost you money. PricewaterhouseCoopers estimates that the process of finding one lost document costs a company $122 on average. Further, PWC estimates that of the 10,000-plus documents the average business handles, 7.5% are lost. With the right indexing procedures in place, finding a document takes mere seconds, and employees can remotely access the documents they need as well.
      </li>
    </ol>
  </p>
  <b>How to create a computerized filing system</b>
  <p>Creating your own computerized filing system takes time, but it is well worth the time and effort. The result is a well-thought-out and organized system.</p>
  <small>Here are six steps to creating a computerized filing system for your business.</small>
  <ol>
    <li>
      <p>Decide who will have ownership of your filing system.</p>
      If you are not overseeing the filing process, assign an administrative staff member to be responsible. Make sure your whole team is aware of what changes are being implemented and who is responsible for overseeing the process. This lets employees know whom they should go to with questions and who is designated as the point person in keeping track of important documents.
    </li>
    <li><p>Get organized.</p>
    Take an inventory of all the documents you have, how big they are, what their function is, how long they need to be stored, etc. Next, loosely organize them accordingly. This is the kick - off of your actual filing process, so think carefully about how you organize documents.
    <p>
    Keep your main goal in mind: to make it as easy as possible for someone to find a document quickly.Folders should have a clear sense of order, they should not be cluttered, and they should not hinder your company's workflow. Be consistent in your labeling and separating.</li>
    </p>
    <li>Use Sub-folders.</li><p>
    You don't need a folder for every small subgroup. For example, you can make one folder for "Medical Records," and create sub-folders within that folder categories by month or by year to keep your system orderly and uncluttered.
    </p>
    <li>Decide on a naming system, and stick to it.</li>
    <p>Naming your files is a vital part of the filing process. Proper and consistent naming makes it easy for anyone in your organization to quickly find a document, because they have a well-founded assumption of what the file might be named and where it might be stored.
    Make sure the file name makes sense and includes the most important information regarding what the document is or says.</p>
    <li>Integrate paper and electronic documents in your filing system.</li>
    <p>If you have important paper documents that must be retained permanently, create a dedicated place within your filing system for those documents. Consider making electronic copies of the paper originals, or if you must store the paper documents, organize them according to your system.</p>
    <li>Inform your team about how the filing system works.</li>
    <p>Once your filing is complete, make sure your entire organization is clear on how the system works and how documents must be named, filed and stored going forward. Create a document that outlines all of your filing guidelines. Keep it in your files, and include training on your filing process as part of your onboarding process.</p>
  </ol>
  <h4>How to create a folder on a Computer System</h4>
  <ul>
    <li>Right click on the blank space within the environment you would like to create a folder; be it Desktop, My Documents e.t.c</li>
    <li>Select "New"</li>
    <li>Click on "Folder"</li>
    <li>Your folder is now created; it's now left for you to give it your desired name.</li>
  </ul>
  <h4>How to name files on your computer</h4>
  Naming your files effectively is one of the most important aspects of an efficient filing system. Without a consistent file-naming convention in place, finding documents becomes confusing, difficult and frustrating. If you start with good habits, you set your business up for success.
  <p>To start, understand that there are two types of files on your computer – the ones you create and the ones you collect.</p>
  <p>Create a system that differentiates these two file types in a way that makes sense, whether that 's marking it in the file name or dictating where the file is stored.</p>
  <p>Next, decide on a naming system. What works best varies from business to business. You have to determine the best naming system for your organization. Many businesses use a combination of name and date so documents are easy to find according to how old they are.</p>
  <small>Here are a few suggestions to follow when naming your files:</small>
  <p>
    <ul>
      <li>Be descriptive</li>
      <li>Be consistent</li>
      <li>Avoid special characters (%, *, @, etc.)</li>
      <li>Use dates</li>
      <li>Include version numbers, if applicable</li>
    </ul>
  </p>
  <hr>
  <b>EXERCISES</b><br>
    Refer to Exercise: <strong>CF201</strong></br>
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
function filling_System() {
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

export default filling_System;
