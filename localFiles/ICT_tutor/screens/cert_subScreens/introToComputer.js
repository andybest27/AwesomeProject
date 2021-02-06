import React, {Component} from "react";
import { View, StyleSheet, Text, Image, Platform} from "react-native";
import {WebView} from 'react-native-webview';
const WebPage = `
<html>
  <body style = "padding: 0px; background-color: #dfdfdf" >
    <div class="parag1">
    <p>Being a modern-day kid you must have used, seen, or read about computers. 
    This is because they are an integral part of our everyday existence. Be it school, 
    banks, shops, railway stations, hospital or your own home, computers are present everywhere, 
    making our work easier and faster for us. As they are such integral parts of our lives, 
    we must know what they are and how they function. Let us start with defining the term computer formally.
    The literal meaning of computer is a device that can calculate. However, modern computers can do a lot more than calculate. 
    Computer is an electronic device that receives input, stores or processes the input as per user instructions and provides output in desired format.
    </p>
    <p><strong>Input-Process-Output Model</strong><br>
    Computer input is called data and the output obtained after processing it, based on user’s instructions is called information. 
    Raw facts and figures which can be processed using arithmetic and logical operations to obtain information are called data.
    </p>
    <p>
    The processes that can be applied to data are of two types - 
    <ul>
    <li><b>Arithmetic operations − </b>Examples include calculations like addition, subtraction, differentials, square root, etc.</li>
    </ul>
    <ul>
    <li><b>Logical operations − </b> Examples include comparison operations like greater than, less than, equal to, opposite, etc.</li>
    </ul>
    </p>
    <p>
    The basic parts of a computer are as follows:
    <ul>
      <li><b>Input Unit −</b> Devices like keyboard and mouse that are used to input data and instructions to the computer are called input unit.</li>
      <li><b>Output Unit −</b> Devices like printer and visual display unit that are used to provide information to the user in desired format are called output unit.</li>
      <li><b>Control Unit −</b> As the name suggests, this unit controls all the functions of the computer. All devices or parts of computer interact through the control unit.</li>
      <li><b>Arithmetic Logic Unit −</b> This is the brain of the computer where all arithmetic operations and logical operations take place.</li>
      <li><b>Memory −</b> All input data, instructions and data interim to the processes are stored in the memory. Memory is of two types – <b>primary memory</b> and <b>secondary memory</b>. 
      Primary memory resides within the CPU whereas secondary memory is external to it.</li>
    </ul>
    Control unit, arithmetic logic unit and memory are together called the <b>central processing unit</b> or <b> CPU</b>. Computer devices like keyboard, mouse, printer, etc. 
    that we can see and touch are the <b>hardware</b> components of a computer. The set of instructions or programs that make the computer function using these hardware parts are called <b>software</b>. 
    We cannot see or touch software. 
    Both hardware and software are necessary for working of a computer.
    </p>
    <p>
      <h4>Characteristics of Computer</h4>
      To understand why computers are such an important part of our lives, let us look at some of its characteristics −
      <ul>
        <li><b>Speed</b> − Typically, a computer can carry out 3-4 million instructions per second.</li>
        <li><b>Accuracy</b> − Computers exhibit a very high degree of accuracy. Errors that may occur are usually due to inaccurate data, wrong instructions or bug in chips – all human errors.</li>
        <li><b>Reliability</b>  − Computers can carry out same type of work repeatedly without throwing up errors due to tiredness or boredom, which are very common among humans.</li>
        <li><b>Versatility</b> − Computers can carry out a wide range of work from data entry and ticket booking to complex mathematical calculations and continuous astronomical observations. 
        If you can input the necessary data with correct instructions, computer will do the processing.</li>
        <li><b>Storage Capacity</b> − Computers can store a very large amount of data at a fraction of cost of traditional storage of files. 
        Also, data is safe from normal wear and tear associated with paper.</li>
      </ul>
    </p>
    <p>
    <h4>Advantages of Using Computer</h4>
    Now that we know the characteristics of computers, we can see the advantages that computers offer: <br />
    <ul>
      <li>Computers can do the same task repetitively with same accuracy.</li>
      <li>Computers do not get tired or bored.</li>
      <li>Computers can take up routine tasks while releasing human resource for more intelligent functions.</li>
    </ul>
    </p>
    <h4>Disadvantages of Using Computer</h4>
    Despite so many advantages, computers have some disadvantages of their own:
    <ul>
    <li>Computers have no intelligence; they follow the instructions blindly without considering the outcome.</li>
    <li>Regular electric supply is necessary to make computers work, which could prove difficult everywhere especially in developing nations.</li>
    </ul>
    <h4>Booting</h4>
    Starting a computer or a computer-embedded device is called <b>BOOTING</b>. Booting takes place in two steps:
    <ul>
      <li>Switching on power supply</li>
      <li>Loading operating system into computer’s main memory</li>
      <li>Keeping all applications in a state of readiness in case needed by the user</li>
    </ul>
    The first program or set of instructions that run when the computer is switched on is called <b>BIOS</b> or <b>Basic Input Output System</b>. BIOS is a <b>firmware</b>, 
    i.e. a piece of software permanently programmed into the hardware.
    If a system is already running but needs to be restarted, it is called <b>REBOOTING</b>. Rebooting may be required if a software or hardware has been installed or system is unusually slow.
    <h5><i>There are two types of booting:</i></h5>
    <ul>
      <li><b>Cold Booting</b>:− When the system is started by switching on the power supply it is called cold booting. The next step in cold booting is loading of BIOS.</li>
      <li> <b>Warm Booting</b>:− When the system is already running and needs to be restarted or rebooted, it is called warm booting. Warm booting is faster than cold booting because BIOS is not reloaded.</li >
    </ul>
    <h4>Representation of Information</h4>
    <ul>
    <i>Units of Computer Memory:</i>
    <li>1 Bit = Binary Digit</li>
    <li>8 Bits = 1 Byte</li>
    <li>1024 Bytes = 1 KB (Kilo Byte)</li>
    <li>1024 KB = 1 MB (Mega Byte)</li>
    <li>1024 MB = 1 GB(Giga Byte)</li>
    <li>1024 GB = 1 TB(Terra Byte)</li>
    </ul>
    <hr>
    <b>EXERCISES</b><br>
    Refer to Exercise: <b>CI101</b>
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
</html>`;
function Intro_to() {
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

export default Intro_to;
