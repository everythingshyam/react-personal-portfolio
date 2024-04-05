import Header from "./Header";
import Projects from "./Projects";
import Footer from "./Footer";
import {useState, useEffect, useReducer} from "react";

//Global Variables
const copyrightYear = new Date().getFullYear();
const projects = [
	{
		id: 1,
		title: "Project 1",
		description: "This is a description of Project 1",
	},
	{
		id: 2,
		title: "Project 2",
		description: "This is a description of Project 2",
	},
	{
		id: 3,
		title: "Project 3",
		description: "This is a description of Project 3",
	},
];

// ==============================================================================================
function App() {
	const [mood, setMood] = useState("happy");
	const toggleMood = () => {
		setMood(mood === "happy" ? "sad" : "happy");
	};

	useEffect(() => {
		document.title = `Shyam is ${mood}`;
	}, [mood]);

	const [work, changeWork] = useReducer((work)=>work==="working"?"not working":"working","working");

	return (
		<>
			<Header/>
			<Projects projects={projects} />
			<p>I am {mood}</p>
			<button onClick={toggleMood}>Become {mood === "happy" ? "sad" : "happy"}</button>
			<p>I am {work}</p>
			<button onClick={changeWork}>Start/Stop Working</button>
			<Footer copyrightYear={copyrightYear} />
		</>
	);
}

export default App;
