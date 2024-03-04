import React, {ChangeEvent, useState} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
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
    const lastPage =  Math.ceil(totalCount/itemsCountForPage);
    // пишет студент // вычислить количество страниц
const [selectedValue, setSelectedValue] = useState(itemsCountForPage);
const [selectedPage, setSelectedPage] = useState(page);
    const onChangeCallback = (event: ChangeEvent<unknown>, newPage: number) => {
        setSelectedPage(newPage);
        onChange(newPage, selectedValue);
        // пишет студент
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(+event.currentTarget.value)
        onChange(1, +event.currentTarget.value)
        setSelectedPage(1)
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={selectedPage}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
                color="primary"
                shape="rounded"
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={selectedValue}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
