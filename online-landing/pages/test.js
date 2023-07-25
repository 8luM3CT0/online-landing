import React, {useState} from 'react'
import {useCollection} from 'react-firebase-hooks/firestore'
import MeiliSearch from 'meilisearch'
import {store} from '../backend/firebase'
import firebase from 'firebase'


function Test() {
    const [word, setWord] = useState('')
    const [meaning, setMeaning] = useState('')
    const [type, setType] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [collection, loading, error] = useCollection(store.collection('articles'));

    const pushTest = e => {
        e.preventDefault()

        store.collection('articles').add({
            word: word,
            firebase: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => (
            doc?.collection('subcollection_meanings').add({
                meaning: meaning,
                type: type
            })
        ))

        setWord('')
        setMeaning('')
        setType('')
        
    }

    const handleSearch = e => {
        e.preventDefault()
        setSearchTerm(e.target.value)
    }

    const searchTest = async q => {
        const client = new MeiliSearch({
            host: 'https://ms-165b4ed19152-3740.sfo.meilisearch.io',
            apiKey: '397ee881e2c43e2a62a6170d0e85c926ebc43744'
        });

        try{
            const index = await client.getIndex('subcollection_meanings');
            const searchResults = await index.search(q)

            return searchResults?.hits
        } catch(error){
            console.error('Meilisearch error >>>>', error)
            return []
        }
    };

    if(loading){
        return <div>loading...</div>
    }

    if(error){
        return <div>Error: {error?.message}</div>
    }

  return (
    <div className='grid place-items-center space-y-5'>
        <h1>Add word below</h1>
        <div>
            <h2>Word:</h2>
            <input type="text" value={word} onChange={e => setWord(e.target.value)} />
            <h2>Type: </h2>
            <input type="text" value={type} onChange={e => setType(e.target.value)} />
            <h2>Meaning:</h2>
            <input type="text" value={meaning} onChange={e => setMeaning(e.target.value)} />

            <button
            type='submit'
            onClick={pushTest}
            >
                Add
            </button>
        </div>
        <div>    
        <input type="text" placeholder='search search search' value={searchTerm} onChange={handleSearch} />
        <ul>
            {collection?.docs.map(data => (
                <li key={data?.id}>
                    <h3>{data?.data()?.word}</h3>
                    <ul>
                        {data?.data()?.subcollection_meanings?.map(meaning => (
                            <li key={meaning?.id}>
                                {meaning?.meaning}
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Test