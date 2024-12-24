import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import myImage from '../public/images/bleh.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="?" title="?" thumbnail={myImage}>
              Test?
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="?" title="?" thumbnail={myImage}>
              Test?
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="?" title="?" thumbnail={myImage}>
              Test?
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="?" title="?" thumbnail={myImage}>
              Test?
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
