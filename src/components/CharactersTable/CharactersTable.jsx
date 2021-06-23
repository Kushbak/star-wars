import { Table } from 'antd'

const CharactersTable = (props) => {
    const columns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            key: 'name',
            width: '30%',
        },
        {
            title: 'Рост',
            dataIndex: 'height',
            key: 'height',
            width: '13%',
        },
        {
            title: 'Вес',
            dataIndex: 'mass',
            key: 'mass',
            width: '10%',
        },
        {
            title: 'Цвет глаз',
            dataIndex: 'eye_color',
            key: 'eye_color',
            width: '20%',
        },
        {
            title: 'Год рождения',
            dataIndex: 'birth_year',
            key: 'birth_year',
            width: '20%',
        },
        {
            title: 'Пол',
            dataIndex: 'gender',
            key: 'gender',
            width: '15%',
        },
    ]
    return (
        <Table
            columns={columns}
            dataSource={props.data}
            loading={props.loading}
            onChange={props.onChange}
            pagination={props.pagination}
        />
    )
}

export default CharactersTable
