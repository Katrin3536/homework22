import React from 'react'

// Иконки (можно заменить на картинки/svg при необходимости)
const downIcon = '[\\/]'
const upIcon = '[/\\]'
const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up // если было по убыванию -> переключаем по возрастанию
    }
    if (sort === up) {
        return '' // если было по возрастанию -> сбрасываем сортировку
    }
    return down // во всех остальных случаях включаем сортировку по убыванию
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', marginLeft: '6px' }}
        >
            {/* Для тестов важно иметь id вида {id}-icon-{value} */}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort} // Оставляем именно такой ID, его обычно требуют тесты*/}
            {/*    src={icon}*/}
            {/*    alt="sort icon"*/}
            {/*    style={{ width: '10px', height: 'auto' }}*/}
            {/*/>*/}
            {icon}
        </span>
    )
}

export default SuperSort
