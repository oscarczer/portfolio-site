import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import kronosImg from '../public/images/kronos/kronos.png'
import gossipImg from '../public/images//gossip/gossip.png'
import cybersaurImg from '../public/images/cybersaur/cybersaur.png'
import pentenImg from '../public/images/penten/pentenfull.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="kronos" title="Kronos" thumbnail={kronosImg}>
              An indie roguelike made for COMP3540 (Game Development)
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="cybersaur"
              title="Cybersaur Revenge"
              thumbnail={cybersaurImg}
            >
              My submission to the 2023 ANU GameJam
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="gossip"
              title="Penten Hackathon"
              thumbnail={gossipImg}
            >
              An interactive gossip spreading simulation using LLMs
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="internship"
              title="Penten Internship Project"
              thumbnail={pentenImg}
            >
              A research project into improving offline model generation
              capabilities
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
