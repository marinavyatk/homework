import React from 'react'
import downArrowIcon from '../icons/downIcon.png'
import upArrowIcon from '../icons/upIcon.png'
import noneArrowIcon from '../icons/noneIcon.png'
import s from '../../HW15.module.css'

// добавить в проект иконки и импортировать
const downIcon = downArrowIcon
const upIcon = upArrowIcon
const noneIcon = noneArrowIcon

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    return sort === down ? up : sort === up ? '' : down
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
            className={s.iconContainer}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
            />
        </span>
    )
}

export default SuperSort
