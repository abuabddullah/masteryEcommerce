import Head from 'next/head';
import React from 'react';

const Meta = ({ title, keyword, description }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta charset="utf-8" />
            <meta httpEquiv="X-UA-compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={description} />
            <meta name="keyword" content={keyword} />
        </Head>
    );
};


Meta.defaultProps = {
    title: 'Mastery Ecommerce By Next.js',
    keyword: 'Next.js, React, ASIF, Ecommerce, Mastery',
    description: 'Mastery Ecommerce is a Next.js Ecommerce Project by ASIF for Mastery Course. Where you can learn Next.js, React, Redux, Node.js, Express.js, MongoDB, Mongoose, Bootstrap, Material UI, and more.'
}



export default Meta;