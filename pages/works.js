import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import kronosImg from '../public/images/kronos.png'
import gossipImg from '../public/images/gossip.png'
import cybersaurImg from '../public/images/cybersaur.png'
import pentenImg from '../public/images/pentenfull.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="kronos" title="kronos" thumbnail={kronosImg}>
              an indie roguelike made for COMP3540 (Game Development)
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="gossip"
              title="penten hackathon"
              thumbnail={gossipImg}
            >
              an interactive gossip spreading simulation using LLMs
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="cybersaur"
              title="cybersaur revenge"
              thumbnail={cybersaurImg}
            >
              my submission to the ANU GameJam (2023)
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="internship"
              title="penten internship project"
              thumbnail={pentenImg}
            >
              a research project into improving offline model generation
              capabilities
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
