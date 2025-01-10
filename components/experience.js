import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { Box, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'

const ExperienceBar = () => {
  const timelineColors = {
    background: useColorModeValue('#16de93', '#43BC80'),
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
          'Dec 2023 - Present',
          '/images/penten.png',
          'penten',
          'software engineer intern',
          "while originally hired to complete a 6 month project on improving offline model generation, i now work as a fullstack engineer on two of the company's flagship projects; HoneyTrace and the Content Behaviour Generator"
        )}
        {renderElement(
          'Feb 2023 - Present',
          '/images/anu.png',
          'australian national university',
          'casual seasonal academic',
          "for the last two years i've worked with course convenors and other teaching staff to run classes, mark exams and support students. in that time ive taken courses in strucuted programming (in java), formal logic, and artifical intelligence"
        )}
        {renderElement(
          'Apr 2023 - August 2023',
          '/images/canteen.png',
          'canteen',
          'data analysis intern',
          "in the few months i volunteered as a data analyst for the charity canteen i worked on developing a SARIMA model that could be used to predict the organisation's yearly income from regular donors"
        )}
      </VerticalTimeline>
    </Box>
  )
}

export default ExperienceBar
