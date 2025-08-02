import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { Box, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'

const ExperienceBar = () => {
  const timelineColors = {
    background: useColorModeValue('#16DE93', '#43BC80'),
    text: useColorModeValue('whiteAlpha.900', 'gray.800'),
    iconBackground: useColorModeValue('whiteAlpha.900', 'gray.800')
  }

  const elementStyles = {
    contentStyle: {
      background: timelineColors.background,
      color: 'white'
    },
    contentArrowStyle: {
      borderRight: `7px solid ${timelineColors.background}`
    },
    iconStyle: {
      background: timelineColors.iconBackground,
      color: timelineColors.text,
      width: '48px',
      height: '48px'
    }
  }

  const renderElement = (date, iconSrc, title, subtitle, description) => (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      {...elementStyles}
      icon={
        <Image
          borderRadius="full"
          background={timelineColors.iconBackground}
          src={iconSrc}
          alt="icon"
          padding="4px"
        />
      }
    >
      <Heading as="h3" size="md" mb={2}>
        {title}
      </Heading>
      <Heading as="h4" size="sm" mb={2}>
        {subtitle}
      </Heading>
      <Text>{description}</Text>
    </VerticalTimelineElement>
  )

  return (
    <Box>
      <VerticalTimeline lineColor={timelineColors.background} layout="1-column">
        {renderElement(
          'June 2025 - Present',
          '/images/experience/sweatychair.jpeg',
          'Sweaty Chair',
          'Software Engineer Intern',
          "Currently working as a software development intern on the company's primary focus; Tingus Goose (currently available to wishlist on Steam!)"
        )}
        {renderElement(
          'Dec 2023 - Present',
          '/images/penten/pentenamio.jpeg',
          'PentenAmio',
          'Software Engineer Intern',
          "While originally hired to complete a 6 month project on improving offline model generation, I now work as a fullstack engineer on two of the company's flagship projects; HoneyTrace and the Content Behaviour Generator. Also responsible for helping establish the company bookclub."
        )}
        {renderElement(
          'Feb 2023 - Present',
          '/images/experience/anu.png',
          'Australian National University',
          'Casual Seasonal Academic',
          "For three years now I've worked with course convenors and other teaching staff to run classes, mark exams and support students. In that time I've taken courses in Structured Programming (in Java), Formal Logic, and Artifical Intelligence."
        )}
        {renderElement(
          'Feb 2024 - November 2024',
          '/images/experience/nuts.jpg',
          'National University Theatre Society (NUTS)',
          'Treasurer',
          'As the Treasurer of the ANU Theatre Society I was responsible for the annual budget, budgeting each of the 4 productions that occurred through the year, organising reimbursements and liaising with both other societies and the university to secure funding.'
        )}
        {renderElement(
          'Apr 2023 - August 2023',
          '/images/experience/canteen.png',
          'Canteen',
          'Data Analysis Intern',
          "In the few months I volunteered as a data analyst for the charity, Canteen, I worked on developing a SARIMA model that could be used to predict the organisation's yearly income from regular donors."
        )}
        {renderElement(
          'Feb 2021 - June 2023',
          '/images/experience/tutortime.png',
          'Tutortime / Freelance',
          'High School Tutor',
          'For the two and a half years that I worked as a high school tutored, I helped Year 11 and 12 HSC students in the subjects of Advanced/Extension 1/Extension 2 Mathematics, Advanced/Extension 1 English, Economics, and Drama.'
        )}
      </VerticalTimeline>
    </Box>
  )
}

export default ExperienceBar
