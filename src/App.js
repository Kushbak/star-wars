import './App.css'
import CharactersTable from './components/CharactersTable/CharactersTable'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_URL } from './constants'
import SearchBlock from './components/SearchBlock/SearchBlock'
import 'antd/dist/antd.css'

function App() {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({})
    const [pagination, setPagination] = useState({
        current: 1,
        defaultCurrent: 1,
        showSizeChanger: false,
        responsive: true,
        total: 0,
    })
    const [search, setSearch] = useState('')

    const requestData = async (page = 1) => {
        setIsLoading(true)
        try {
            const res = await axios.get(API_URL, {
                params: { page, search }
            })
            setData(res.data)
            setPagination({
                ...pagination,
                current: page,
                total: res.data.count
            })
        } catch(e) {
            console.log(e)
        }
        setIsLoading(false)
    }

    const handleTableChange = (pagination) => {
        requestData(pagination.current)
    }

    useEffect(() => requestData(), [search])
    
    return (
        <div className="app">
            <SearchBlock requestData={requestData} handleSearch={setSearch} />
            <CharactersTable 
                pagination={pagination} 
                onChange={handleTableChange} 
                data={data.results} 
                loading={isLoading} 
            />
        </div>
    )
}

export default App
