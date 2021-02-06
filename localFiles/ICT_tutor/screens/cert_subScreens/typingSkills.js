import React, {Component} from "react";
import { View, StyleSheet, Text, Image, Platform} from "react-native";
import {WebView} from 'react-native-webview';
const WebPage = `
    <html>
        <body style = "padding: 0px; background-color: #dfdfdf" >
            <div class="parag1">
                An average professional typist usually types around 65 to 75 WPM. More advanced positions require 80 to 95 (this is typically the minimum required for dispatch positions and other time-sensitive typing jobs). There are also some advanced typists whose work requires speeds above 120 WPM.
            <h4>Stop Pecking at Your Keyboard:</br>
                The Many Benefits of Learning How to Type Fast and Accurately</h4>
                These days, typing can seem like it is not such an important skill as it once was. For example, we are becoming increasingly used to talking to our machines with the advances being made by Google Home, Alexa, Cortana, and Siri.
                <p>But typing remains a fundamental skill, and it is still one of the most important computer skills you can learn. Learning to type fast and accurately will help you in many ways in life, and it should be considered an essential skill for anyone who sees themselves working with a computer in some capacity (which is most people!)</p>
            <b>Here are a few of the reasons why learning how to type fast is so beneficial in general life and in work.</b>
            <p>
                <b>Save Time:</b>
                Typing is something most of us will have to do a lot of in our jobs. Whether you work in an office or not, you will probably end up having to type on a computer keyboard on a weekly or even daily basis.
                It stands to reason that the faster you can type, the more time you will save.
                When you are tasked with typing up a report, or even when you have to send an email, if you can do so quickly while remaining accurate, you could end up saving a lot of time.
                Just think of all those emails most people send every day. Add up the time you can save typing up each email, and over the weeks and months that could add up to a lot of saved time.
            </p>
            <p>
                <b>Be More Productive</b><br>
                Everyone is looking for ways to be more productive both in the workplace and at home, and typing faster is a simple way to get more done.
                If you learn to double the speed you type, you can essentially get twice as much done in the same space of time.
                Employers might even want to ensure their employees are trained up in touch-typing due to the productivity boost it could lead to.
                And if you are an employee, you could learn how to increase your typing speed to impress your boss, or you can simply give yourself more time to spend on other things.
            </p>
            <p>
                <b>Improve Your Posture</b><br>
                Posture may not be the first thing you think about when you decide to increase your typing speed, but it can certainly benefit.
                No matter whether you can touch type or not, you will still spend a lot of your time typing in almost any office-based role. Everyone knows that sitting down at your desk for long periods of time without a break is bad for your posture, so it makes sense to reduce the amount of time you sit down.
                If a lot of your time sitting at your desk is spent typing, you might be able to improve your posture and your health by increasing your typing speed. This will mean less time spent typing at your desk, and that will lead to more time spent standing up and stretching so as not to hurt your back, neck, and shoulders.
                When you learn to touch type, you will also learn about correct typing posture. It's very important to sit up properly in order to stop your neck from becoming stiff and prevent your wrists from causing you pain. You will become more aware of correct posture when you learn to type properly, and you also won't have to keep looking down at your keyboard, which gives your neck a break and reduces aching.
            </p>
            <p>
                <b>Improve Your Focus</b><br>
                Another benefit of learning to type faster is that you will not have to look at the keyboard and think about where your fingers are going. Once you are typing fast, you will be able to look directly at the screen, and your fingers will type without you even thinking about the movements.
                This means that you will be able to improve your focus. Every time you look down and try to find a key, you are losing concentration, so you will be able to focus more on what you are trying to say than the actual letters that you are typing.
                So learn how to type properly and improve your focus, which will lead to a better flow and your thoughts won't be interrupted as much.
            </p>
            <p>
                <b>Better Accuracy</b><br>
                Learning to touch type is not just about learning how to type faster: It's also about learning how to type with greater accuracy.
                <br>If you use tool like <b>Mavis Beacon</b> to help you learn to type faster, it will also highlight your mistakes in the moment so you can focus on reducing them.
                That means you will spend less time checking for mistakes in your writing and correcting them, saving you yet more time and making less work for you. It will also mean that there is less chance that mistakes will sneak through into the final version of the document.
            </p>
            <p>
                <b>Find More Opportunities</b><br>
                Finally, because touch-typing is such a useful skill that boosts productivity in the workplace, it can help you to find more and better opportunities when it comes to getting a job. When applying for a job, being able to type fast and accurately is going to put you at a big advantage. Employers like to know that their employees can type properly because it will make them more productive and improve the accuracy of their work.
                So make sure you clearly state your word per minute (WPM) on your resume to impress prospective employers, and you may find that more opportunities come your way.
            </p>
            <p>
                <b>Learn to Type Faster</b><br>
                Learning to type faster will provide you with all of these benefits and more, and it really should be considered an essential skill.
                Even though more of us are talking into our phones and computers these days, typing is still certain to play an important role in our lives for many years to come, so learning how to type is never a waste of time.
                The great thing about typing is that it is not difficult to learn, and anyone can learn with a bit of dedication and practice. So start learning today, and enjoy all the benefits that faster and more accurate typing brings.
            </p>
            <h4>5 Ways To Boost Typing Speed And Accuracy</h4>
            <ol>
                <li>
                    <b>Only perfect practice makes perfect.</b><br>
                    You’ve probably heard that practice makes perfect, but that isn’t always the case. If you’re not practicing the correct way, then your practice could do more harm than good. That’s why I always say that “perfect” practice is what really makes perfect, so before you start typing away, ensure that you’re practicing the best habits for keyboard input. This means you need to start using both hands instead of two fingers, and one thumb needs to be on the space bar at all times. 
                    <p>
                        It takes time to adjust, but you honestly can’t have a high typing speed if you’re still typing one key at a time. If necessary, take some classes online or at a school where you can learn how to do this from scratch.
                    </p>
                </li>
                <li>
                    <b>Be comfortable.</b><br>
                    It should go without saying that you work better when you’re more comfortable. The same goes for typing. Make sure you’re sitting up straight, but allow your wrists to rest while your fingers are on the keyboard. Having them in the air inhibits your speed and is just plain uncomfortable.
                    Additionally, keep both feet on the floor and take breaks when needed. If your fingers or hands start to hurt, take a break! Straining yourself gets you nowhere, but pacing yourself will improve your strength. It takes time, but eventually you’ll need to take fewer rest breaks.
                </li>
                <li>
                    <b>Don’t look at the keyboard!</b></br>
                    Once you’ve gotten a decent feel for where the keys are laid out, eliminate the habit of looking down while you type. For one thing, it prevents you from visually editing your copy in real-time, meaning more mistakes and more time wasted editing in the end. You’ll also learn the layout of the keys a lot faster, since you are not taking any mental shortcuts. 
                </li>
                <li>
                    <b>Use online resources.</b><br>
                    One of the easiest, free ways to advance your typing speed and precision is to have fun with it. Mashable put out a list of some great resources online that are all free to use (including games!) Pick the one that matches your current level or style of learning and start practicing!
                </li>
                <li>
                    <b>Keep striving for improvement.</b><br>
                    The worst thing you can do is become complacent. Your typing skill can always get better as long as you’re balancing how fast you type with how correctly you type. Test your speed routinely and set goals for the WPM you want to reach.
                    Once you’ve reached it, aim higher! Some of the resources above are great for keeping track of this, and nothing is a better motivator than competition. Consider getting some coworkers or friends in on it and see who will reach the farthest.
                    Whatever you decide to do, remember that typing is like any other skill out there. It requires practice, patience and time. Commit to improving it and you’ll get fantastic results.
                </li>
            </ol>
            <hr>
  <b>EXERCISES</b><br>
    Refer to Exercise: <strong>CT401</strong></br>
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
function typingSkills() {
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

export default typingSkills;
//typingSkills