import { useEffect } from 'react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useColorModeValue } from '@chakra-ui/react'

function NProgressComponent() {
  const router = useRouter()
  const progressColor = useColorModeValue('#16DE93', '#43BC80')

  useEffect(() => {
    NProgress.configure({ showSpinner: false })

    const styleTag = document.createElement('style')
    styleTag.innerHTML = `
      #nprogress .bar {
        background: ${progressColor} !important;
      }
    `
    document.head.appendChild(styleTag)

    const handleStart = () => NProgress.start()
    const handleComplete = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
      document.head.removeChild(styleTag)
    }
  }, [progressColor])

  return null
}

export default NProgressComponent
