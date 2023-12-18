import React from 'react';

import Card from '../../../helpers/cards/Card'

import './Experience.css'

const Experience = ({ darkMode }) => {
  return <div id="experience" className="experience">
    <Card
      title="Vibry Business Solutions"
      subtitle="Internship Trainee (Front End Developer)"
      timeline="February 2023–March 2023"
      location="Bangalore, INDIA"
      description={`
          • Collaborated with the UI/UX team on 30+ design iterations, resulting in substantial enhancements to the overall user experience.<br />
          • Worked on the integration of JavaScript libraries, notably React, contributing to the creation of more than 15 interactive and dynamic website features, substantially elevated user engagement and interactivity.
        `}
    />
    <Card
      title="DLK Career Development"
      subtitle="Internship Trainee (Python-Machine Learning)"
      timeline="February 2021–March 2021"
      location="Chennai, INDIA"
      description={`
          • Developed and implemented machine learning models in Python for predictive analytics, resulting in a 20% improvement in forecasting accuracy.<br />
          • Modeled and trained deep learning models using Python libraries like TensorFlow and Scikit-Learn, yielding a 25% decrease in classification errors.
        `}
    />
  </div>;
}

export default Experience;