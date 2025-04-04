import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import feeshImg from '../public/images/feesh/feesh-thumbnail.png'
import kronosImg from '../public/images/kronos/kronos.png'
import gossipImg from '../public/images//gossip/gossip.png'
import cybersaurImg from '../public/images/cybersaur/cybersaur.png'
import pentenImg from '../public/images/penten/pentenfull.png'
import donutImg from '../public/images/donut/donut.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="feesh" title="feesh" thumbnail={feeshImg}>
              My group submission to the 2025 ANU GameJam
            </WorkGridItem>
          </Section>

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
              My group submission to the 2023 ANU GameJam
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
            <WorkGridItem id="donut" title="Blender Donut" thumbnail={donutImg}>
              An introductory project in Blender to show off an understanding of
              the software
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
