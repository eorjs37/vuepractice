import ButtonComp from './ButtonComp.vue';

import { action } from '@storybook/addon-actions';

export default{
    component:ButtonComp,
    title:'ButtonComp',
    tags:['autodocs'],
    args:{
        onCustomClick:action('onCustomClick',{
            depth:100
        })
    }
}


export const Default = {
    args:{
        btnname:'버튼',
        
    }
}