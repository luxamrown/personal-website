import {useRouter} from 'next/router'
import Renders from '../../components/portofolio/renders'
import Render from './renders'

export default function PortofolioDetails() {
    const router = useRouter()
    const {type} = router.query
    if (type === 'render') {
        return (
            <>
                <Render />
            </>
        )
    } else if (type === 'code'){
        console.log(router.pathname);
        return(
            <>
                ini code
            </>
        )
    }

}
