import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Search = () => {
    const [search, setSearch] = useState('')
    const [companyData, setCompanyData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await axios({
                method: 'get',
                url: `http://localhost:5000/api/${search}`,
                withCredentials: false,
            })
            setCompanyData(data.data)
        }
        fetchData();
    }, [search])

    const onClickHandler = (e) => {
        e.preventDefault()
        setSearch('')
    }

    console.log(companyData)
    return (
        <>
            <form>
                <div className='search-wrapper'>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='searching...'
                            className='form-control'
                            value={search}
                            onChange={(e) => { setSearch(e.target.value) }}
                        />
                        <button className='search-btn' onClick={(e) => onClickHandler(e)}>Search</button>
                    </div>
                </div>

                {
                    companyData && companyData?.length > 0 && (
                        <div className='search-result'>
                            {
                                companyData.map(item => (
                                    <div className='search-item' key={item._id}>
                                        <div className='img'>
                                            <img src={item.imageUrl.slice(0,-17)} />
                                            {console.log(item.imageUrl.slice(0,-17))}
                                        </div>
                                        <div className='searchItem-info'>
                                            <p className='name'>{item.companyName}</p>
                                            <p className='headline'>{item.headline}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    )
                }

            </form>
        </>
    )
}

export default Search;
