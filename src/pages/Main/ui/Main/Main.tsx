import { memo, type FC } from 'react'

import { Page } from '@/widgets/Page'

type MainProps = {
    className?: string
}

const Main: FC<MainProps> = memo(() => {
    return <Page>main</Page>
})

export default Main
