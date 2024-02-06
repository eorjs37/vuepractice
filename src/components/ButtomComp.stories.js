import ButtonComp from './ButtonComp.vue';

import { action } from '@storybook/addon-actions';

export default{
    component:ButtonComp,
    title:'ButtonComp',
    tags:['autodocs'],
    args:{
        onBtnClick:action('btn-click')
    }
    // argTypes:{
    //     onBtnClick:{
    //         action:'btn-click'
    //     }
    // }
}

export const actionsData = {
    onBtnClick:action('btn-click')
}

export const Default = {
    args:{
        btnname:'버튼1'
    }
}