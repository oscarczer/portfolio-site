import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import feeshImg from '../public/images/feesh/feesh-thumbnail.png'
import kronosImg from '../public/images/kronos/kronos.png'
import gossipImg from '../public/images/gossip/gossip.png'
import cybersaurImg from '../public/images/cybersaur/cybersaur.png'
import pentenImg from '../public/images/penten/pentenamiofull.jpg'
import platformerImg from '../public/images/pdplatformer/full_patch.png'

const jams = [
  {
    id: 'feesh',
    title: 'feesh',
    thumbnail: feeshImg,
    description: 'My group submission to the 2025 ANU GameJam'
  },
  {
    id: 'cybersaur',
    title: 'Cybersaur Revenge',
    thumbnail: cybersaurImg,
    description: 'My group submission to the 2023 ANU GameJam'
  },
  {
    id: 'gossip',
    title: 'Penten Hackathon',
    thumbnail: gossipImg,
    description: 'An interactive gossip spreading simulation using LLMs'
  }
]

const uniProjects = [
  {
    id: 'pdplatformer',
    title: 'Unity / PureData Musical Platformer',
    thumbnail: platformerImg,
    description:
      'A musical performance made through connecting Unity with PureData'
  },
  {
    id: 'graphicsrenderer',
    title: 'C++ Custom Graphics Renderer',
    thumbnail: pentenImg,
    description: 'A custom graphics renderer made in C++'
  },
  {
    id: 'internship',
    title: 'Internship Project',
    thumbnail: pentenImg,
    description:
      'A research project into improving offline model generation capabilities'
  }
]

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Main Focus
        </Heading>

        <Section>
          <WorkGridItem
            id="kronos"
            title="KRONOS"
            thumbnail={kronosImg}
            aria-label="View KRONOS project"
          >
            An indie roguelike being solo dev'd by yours truly.
          </WorkGridItem>
        </Section>

        <Heading as="h3" fontSize={20} mb={4}>
          Game Jams and Hackathons
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {jams.map((item, i) => (
            <Section key={item.id} delay={0.05 * (i + 1)}>
              <WorkGridItem
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                aria-label={`View ${item.title} project`}
              >
                {item.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={4}>
          Cool Uni Projects
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
          {uniProjects.map((item, i) => (
            <Section key={item.id} delay={0.05 * (i + 1)}>
              <WorkGridItem
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                aria-label={`View ${item.title}`}
              >
                {item.description}
              </WorkGridItem>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
