import HeaderComp from './HeaderComp.vue';

import { action } from '@storybook/addon-actions'
export default{
    component:HeaderComp,
    title:'HeaderComp',
    tags:['autodocs'],
    
}

export const Default = {
    args:{
        onBtn1Click:action('click')
    }
}