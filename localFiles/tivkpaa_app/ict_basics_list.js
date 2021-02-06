import React, {Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {Text, View, ScrollView, TouchableOpacity, Dimensions, ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Style from './ict_basics_Style';
import Loader from './loader';

const DeviceWidth = Dimensions.get('window').width;
const DeviceHeight = Dimensions.get('window').height;


//functions
const MyTheme = {
	dark: false,
  	colors: {
		card: 'red',
		primary: '#2a70be',
		background: '#ffffff00'
      }}
const Stack = createStackNavigator();
export default function ictBasic(navigation) {
        return(
            <Stack.Navigator>
                <Stack.Screen name="ICT Basic" component={ICTContents}
                options={{
                    title: 'ICT Basics',
                    headerStyle: {
                    backgroundColor: '#064155'
                    },
                    headerTintColor: '#fff', 
                    }
                    }
                  
                 />
                <Stack.Screen name="intro_ict" component={intro_ict} 
                    options = {{
                            title: 'Introduction to ICT',
                             headerTintColor: '#fff',
                             headerStyle: {
                             backgroundColor: '#064155',
                             },

                       }}
                />
                <Stack.Screen name="hard_softWare" component={hard_softWare} 
                    options = {{
                            title: 'Hardware and Software',
                             headerTintColor: '#fff',
                             headerStyle: {
                             backgroundColor: '#064155',
                             },

                       }}
                />
            </Stack.Navigator>
        )
    }
function ICTContents({navigation}) {
  return (
		<View style={Style.container}>
			<Loader loading={false} />
			<ScrollView>
				<Text style={Style.contentTxt}>Course Contents</Text>
				<TouchableOpacity style={Style.listTouch} onPress = {() => navigation.navigate('ictBasics', {screen: 'intro_ict'})}>
					<Text style={Style.listTxt}> 1. Introduction To Information Technology</Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch} onPress = {() => navigation.navigate('ictBasics', {screen: 'hard_softWare'})}>
					<Text style={Style.listTxt}> 2. Hardware and Software</Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 3. Computer Operating System</Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 4. Network and Peripherals </Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 5. ICT in Every Day Life</Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 6. Environmental Impacts </Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 7. Influence on Health </Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 8. Economical Impact </Text>
				</TouchableOpacity>
				<TouchableOpacity style={Style.listTouch}>
					<Text style={Style.listTxt}> 9. Legal Regulations </Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
  );
}

function intro_ict({navigation}) {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
    const I = (props) => <Text style={{ fontStyle: 'italic' }}>{props.children}</Text>;
  return (
		<View style={Style.container2}>
			<ScrollView>
				<Text style = {Style.bodyTxt}>
					<B>Information and communications technology (ICT)</B> is an extensional term for information
					technology (IT) that stresses the role of unified communications and the integration of
					telecommunications <I>(telephone lines and wireless signals)</I> and computers, as well as necessary
					enterprise software, middleware, storage and audiovisual systems, that enable users to access,
					store, transmit, and manipulate information. The term ICT is also used to refer to the convergence
					of audiovisual and telephone networks with computer networks through a single cabling or link
					system.There are large economic incentives to merge the telephone network with the computer network
					system using a single unified system of cabling, signal distribution, and management.ICT is an
					umbrella term that includes any communication device, encompassing radio, television, cell phones,
					computer and network hardware, satellite systems and so on, as well as the various services and
					appliances with them such as video conferencing and distance learning. ICT is a broad subject and
					the concepts are evolving.It covers any product that will store, retrieve, manipulate, transmit, or
					receive information electronically in a digital form(e.g., personal computers, digital television,
					email, or robots).Theoretical differences between interpersonal - communication technologies and
					mass - communication technologies have been identified by the philosopher Piyush Mathur.Skills
					Framework for the Information Age is one of many models for describing and managing competencies for
					ICT professionals for the 21 st century.{'\n'}
					{'\n'}
					<B>Etymology</B>
					{'\n'}
					The phrase "information and communication technologies" has been used by academic researchers since
					the 1980 s. The abbreviation "ICT" became popular after it was used in a report to the UK government
					by Dennis Stevenson in 1997, and then in the revised National Curriculum for England, Wales and
					Northern Ireland in 2000. However, in 2012, the Royal Society recommended that the use of the term
					"ICT" should be discontinued in British schools "as it has attracted too many negative
					connotations". From 2014 the National Curriculum has used the word computing, which reflects the
					addition of computer programming into the curriculum. Variations of the phrase have spread
					worldwide.The United Nations has created a "United Nations Information and Communication
					Technologies Task Force" and an internal "Office of Information and Communications Technology"
					{'\n'}
					{'\n'}
					<B>Monetisation</B>
					{'\n'}
					The money spent on IT worldwide has been estimated as US$3 .8 trillion in 2017 and has been growing
					at less than 5 % per year since 2009. The estimate 2018 growth of the entire ICT is 5 % .The biggest
					growth of 16 % is expected in the area of new technologies(IoT, Robotics, AR / VR, and AI). The 2014
					IT budget of the US federal government was nearly $82 billion. IT costs, as a percentage of
					corporate revenue, have grown 50 % since 2002, putting a strain on IT budgets.When looking at
					current companies ' IT budgets, 75% are recurrent costs, used to "keep the lights on" in the IT
					department, and 25% are the cost of new initiatives for technology development.{'\n'}{'\n'}
                    <B>EXERCISES:</B>{'\n'}
                    1. Briefly Explained what you understand by information Technology. {'\n'}
                    2. Outline describe the origin of ICT. {'\n'}
                    3. Differentiate between ICT and Internet.
				</Text>
			</ScrollView>
			<View
				style={{
					backgroundColor: '#064155',
					alignItems: 'center',
					justifyContent: 'center',
					width: DeviceWidth,
					height: 30,
				}}
			>
				<Text style={{ color: '#fff', fontSize: 10 }}>Copyright @ EasyClick ICT Consultant 2020</Text>
			</View>
		</View>
  );
}
function hard_softWare({navigation}) {
    const B = (props) => <Text style={{fontWeight: 'bold'}}>{props.children}</Text>;
    const I = (props) => <Text style={{ fontStyle: 'italic' }}>{props.children}</Text>;
  return (
		<View style={Style.container2}>
			<ScrollView>
				<Text style = {Style.bodyTxt}>
               <B> Hardware</B>{'\n'}
                Hardware refers to the physical elements of a computer.This is also sometime called the machinery or the equipment of the computer.Examples of hardware in a computer are the keyboard, the monitor, the mouse and the central processing unit.However, most of a computer 's hardware cannot be seen; in other words, it is not an external element of the computer, but rather an internal one, surrounded by the computer's casing(tower).A computer 's hardware is comprised of many different parts, but perhaps the most important of these is the motherboard. The motherboard is made up of even more parts that power and control the computer.
                In contrast to software, hardware is a physical entity.Hardware and software are interconnected, without software, the hardware of a computer would have no
                function.However, without the creation of hardware to perform tasks directed by software via the central processing unit, software would be useless.
                Hardware is limited to specifically designed tasks that are, taken independently, very simple.Software implements algorithms(problem solutions) that allow the computer to complete much more complex tasks.
                {'\n'}{'\n'}
                <B>Software</B>{'\n'}

                Software, commonly known as programs or apps, consists of all the instructions that tell the hardware how to perform a task.These instructions come from a software developer in the form that will be accepted by the platform(operating system + CPU) that they are based on.For example, a program that is designed
                for the Windows operating system will only work
                for that specific operating system.Compatibility of software will vary as the design of the software and the operating system differ.Software that is designed
                for Windows XP may experience a compatibility issue when running under Windows 2000 or NT.
                {'\n'}{'\n'}
                Software is capable of performing many tasks, as opposed to hardware which can only perform mechanical tasks that they are designed
                for.Software provides the means
                for accomplishing many different tasks with the same basic hardware.Practical computer systems divide software systems into two major classes:
                {'\n'}{'\n'}
                <B>* System software:</B> Helps run the computer hardware and computer system itself.System software includes operating systems, device drivers, diagnostic tools and more.System software is almost always pre - installed on your computer.
                {'\n'}<B>* Application software:</B> Allows users to accomplish one or more tasks.It includes word processing, web browsing and almost any other task
                for which you might install software.(Some application software is pre - installed on most computer systems.)
                {'\n'}{'\n'}
                Software is generally created(written) in a high - level programming language, one that is(more or less) readable by people.These high - level instructions are converted into "machine language"
                instructions, represented in binary code, before the hardware can "run the code".When you install software, it is generally already in this machine language, binary, form.
                {'\n'}{'\n'}
                <B>Firmware</B>
                {'\n'}
                Firmware is a very specific, low - level program
                for the hardware that allows it to accomplish some specific task.Firmware programs are(relatively) permanent, i.e., difficult or impossible to change.From the higher - level view of software, firmware is just part of the hardware, although it provides some functionality beyond that of simple hardware.
                {'\n'}{'\n'}
                Firmware is part of devices(or device components) such as a video card, sound card, disk drive and even the motherboard.The AMIBIOS image to the right is from a Baby AT Motherboard.
                </Text>
			</ScrollView>
			<View
				style={Style.buttonView}
			>
				<Text style={Style.buttonText}>Copyright @ EasyClick ICT Consultant 2020</Text>
			</View>
		</View>
  );
}