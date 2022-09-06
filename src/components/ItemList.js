import PropTypes from 'prop-types'
import React from 'react'
import Item from './Item'

const ItemList = ({items = []}) => {
    return (
        <div className="grid grid-cols-2 justify-between sm:grid-cols-3">
            {items.map((item) => (<Item key={item.id} itemData={item} />
            ))}
        </div>
    )

}

ItemList.propTypes = {
    items: PropTypes.array
}


export default ItemList