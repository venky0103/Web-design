import React from 'react';

import Panel from '../../../helpers/panels/Panel';

import './Portfolio.css'

const Portfolio = ({ darkMode }) => {
  return <div className="portfolio">
    <Panel
      title="Battery Health Estimation Using Regression"
      timeline="February 2023–April 2023"
      description={`
      Developed a cutting-edge regression-based state of health (SOH) monitoring model for lithium-ion batteries, showcasing 85% accuracy. 
      Engineered a system designed to provide users with precise and reliable information on the condition of their batteries, enabling 90% effective power source management.
      Calculated numerous cycles and attained an 80% accuracy rate and exhibited their capability to detect localized regeneration occurrences within battery cells, notably enhancing the accuracy of safety and maintenance decision-making processes.
  `}
      image={`https://media.istockphoto.com/id/1404775151/vector/electrical-energy-concept.jpg?s=1024x1024&w=is&k=20&c=IbWWdBwdPYI3MoU6-gXys8i4Q3vJny29UkKymw4hHPQ=`}

    />
    <Panel
      title="IBM – Web Phishing Detection"
      timeline="June 2022–August 2022"
      description={`
            Formulated a comprehensive full-stack application with a 90% accuracy rate in the identification of phishing URLs.
            Harnessed the power of machine learning to train a regression model using a dataset of over 10,000 URLs, achieving 70% more efficiency in distinguishing genuine from fraudulent ones.
            Created an intuitive front-end application that seamlessly incorporated the model, optimizing efficiency and granting users swift access to informed assessments of URL authenticity.
        `}
      image={`https://media.istockphoto.com/id/913298820/photo/man-using-keyboard-looks-at-password-symbol-on-interactive-screen.jpg?s=612x612&w=0&k=20&c=GYp--CsjHI7T3FeUoJux3LGjGv2R1DYXrO1v6hABtdI=`}
    />

  </div>

}

export default Portfolio;