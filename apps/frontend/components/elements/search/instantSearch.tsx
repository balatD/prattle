'use client';

import React from 'react';
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
    'http://localhost:' + (process.env.MEILI_PORT ?? '7700'),
    'ikY6bCa95x8pUo8SckamUdzcFT8EOLLwWN4HxgTzuU0='
);

const InstantSearchForm = () => (
    <InstantSearch
        indexName="post"
        searchClient={searchClient}
    >
        <div className='mb-3'>
            <SearchBox classNames={{
                input: 'border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black',
            }} />
        </div>
        <Hits hitComponent={Hit} />
    </InstantSearch>
);

const Hit = ({ hit }) => (
    <>
        <div className="block border-1 bg-white text-black rounded-md p-3 mb-5">
            <Highlight key={hit.id} attribute="name" hit={hit} />
            <p>{hit.body}</p>
        </div>
    </>
);


export default InstantSearchForm;
