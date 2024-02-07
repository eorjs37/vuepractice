import ButtonComp from './ButtonComp.vue';

import { action } from '@storybook/addon-actions';

export default{
    component:ButtonComp,
    title:'ButtonComp',
    tags:['autodocs'],
    args:{
        // onClick:action('clicked'),
        onCustomClick:action('onCustomClick')
    }
}


export const Default = {
    args:{
        btnname:'버튼',
        
    }
}