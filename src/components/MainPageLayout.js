/* eslint-disable arrow-body-style */
import React from 'react';
import Navs from './Navs';
import Title from './Title';

const MainPageLayout = ({childern}) => {
    return (
        <div>
        
            <Title title="Box Office" subtitle="Are You Looking For Movie Or an Actor"/>
            <Navs  />
            {childern}
            </div>
    );
};
export default MainPageLayout