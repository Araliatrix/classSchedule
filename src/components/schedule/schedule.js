import React, { Component } from "react";
import Gradient from "../gradient";
import ScheduleCourse from "./schedule-course";
import ProgressTracker from "./progressTracker";

export default class Schedule extends Component {
	render() {
		return (
			<div className="schedule">
				<h1 className="schedule__title">My Schedule</h1>
				<ScheduleCourse title={'ProblemSolving'}/>
				<ScheduleCourse title={'ProblemSolving'}/>
				<ScheduleCourse title={'ProblemSolving'}/>
				<ProgressTracker/>
				<Gradient />
			</div>
		);
	}
}
