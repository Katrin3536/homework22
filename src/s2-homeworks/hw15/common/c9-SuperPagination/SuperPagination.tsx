import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination } from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    // Вычисляем количество страниц (минимум 1, чтобы MUI Pagination не выдавал ошибку)
    const lastPage = Math.ceil(totalCount / itemsCountForPage) || 1

    const onChangeCallback = (event: any, page: number) => {
        // Передаем кликнутую страницу и текущий размер страницы
        onChange(page, itemsCountForPage)
    }

    const onChangeSelect = (value: any) => {
        // При смене количества строк перекидываем на 1 страницу и переводим значение в number
        onChange(1, Number(value))
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // здесь могут быть ваши стили для Pagination
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChangeOption={onChangeSelect} // Используем onChangeOption вместо onChange
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
