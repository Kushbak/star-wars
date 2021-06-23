import { Input } from 'antd'

const { Search } = Input

const SearchBlock = (props) => {
    return (
        <div className='search'>
            <Search placeholer='Enter name of chaacter' onSearch={props.handleSearch} size='large' enterButton allowClear />
        </div>
    )
}

export default SearchBlock
