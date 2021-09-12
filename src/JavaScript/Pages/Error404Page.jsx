import React from 'react'
import { Helmet } from 'react-helmet'

import Error404Cont from '../Conteiners/Error404Cont'

export default function Error404Page(){
    return(
        <> 
        <Helmet>
        <title>GEMAAYECAC | Error 404</title>
        </Helmet>
        <Error404Cont/> 
        </>
    );
}