import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import React from 'react'
import { Box, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react'

const ExperienceBar = () => {
  const timelineColors = {
    background: useColorModeValue('#17E89A', '#43BC80'),
    text: useColorModeValue('whiteAlpha.900', 'gray.800'),
    iconBackground: useColorModeValue('whiteAlpha.900', 'gray.800')
  }

  return (
    <Box>
      <VerticalTimeline
        lineColor={timelineColors.background}
        layout={'1-column-left'}
        animate={true}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: timelineColors.background,
            color: timelineColors.text
          }}
          contentArrowStyle={{
            borderRight: `7px solid ${timelineColors.background}`
          }}
          date="May 2024 - August 2024"
          iconStyle={{
            background: timelineColors.iconBackground,
            color: timelineColors.text,
            width: '48px',
            height: '48px'
          }}
          icon={
            <Box>
              <Image
                padding="1px"
                paddingLeft="1px"
                background="white"
                borderRadius="50%"
                src={'/images/bleh.png'}
              />
            </Box>
          }
        >
          <Heading as="h3" size="md" mb={2}>
            penten
          </Heading>
          <Heading as={'h4'} size={'sm'} mb={2}>
            software engineer intern
          </Heading>
          <Text>responsible for</Text>
          <Text>filler</Text>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Box>
  )
}

export default ExperienceBar
