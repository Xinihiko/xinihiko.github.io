import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Header from './Header.js';
import Hero from './Hero.js';
import {EducationCompact, EducationFull} from './Education.js';
import {ExperiencesCompact, ExperiencesFull} from './Experiences.js';
import {SkillCompact, SkillFull} from './Skill.js';
import {ContactCompact, ContactFull} from './Contact.js';
import Footer from './Footer.js';
import React from 'react';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			page:'index'
		}
	}

	getContent() {
		// TODO : onClick change state
		switch (this.state.page) {
			case 'education':
				return <EducationFull />;
			case 'experience':
				return <ExperiencesFull />;
			case 'skill':
				return <SkillFull />;
			case 'about':
				return (
					<>
						<ContactFull />;
					</>
				)
			default:
				return (
					<>
						<Hero />
						<EducationCompact />
						<SkillCompact />
						<ExperiencesCompact />
						<ContactCompact />
					</>
				)
		}
	}

	headerHandler = (activePage) => {
		this.setState({page:activePage}, ()=>{});
	}

	render () {
		return (
			<div>
				<Header onStateChanged={this.headerHandler} />
				<div className='content'>
					{this.getContent()}
					
					<section id='contact'>
						
					</section>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
