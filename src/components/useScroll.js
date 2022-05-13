import { useAnimation } from "framer-motion";
import {useInView} from 'react-intersection-observer'

export const useScroll = () => {
    const controlanimation = useAnimation()
    const [element,view] = useInView({threshold:0.1})
    if(view){
        controlanimation.start("show")
    }else{
        controlanimation.start("hidden")
    }

    return [element,controlanimation]
}