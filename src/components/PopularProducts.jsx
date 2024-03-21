const popularProducts = [
    {
        id: '3432',
        product_name: 'Macbook M1 Pro 14"',
        product_thumbnail: 'https://source.unsplash.com/100x100?macbook',
        product_price: '$1499.00',
        product_stock: 341
    },
    {
        id: '7633',
        product_name: 'Samsung Galaxy Buds 2',
        product_thumbnail: 'https://source.unsplash.com/100x100?earbuds',
        product_price: '$399.00',
        product_stock: 24
    },
    {
        id: '6534',
        product_name: 'Asus Zenbook Pro',
        product_thumbnail: 'https://source.unsplash.com/100x100?laptop',
        product_price: '$899.00',
        product_stock: 56
    },
    {
        id: '9234',
        product_name: 'LG Flex Canvas',
        product_thumbnail: 'https://source.unsplash.com/100x100?smartphone',
        product_price: '$499.00',
        product_stock: 98
    },
    {
        id: '4314',
        product_name: 'Apple Magic Touchpad',
        product_thumbnail: 'https://source.unsplash.com/100x100?touchpad',
        product_price: '$699.00',
        product_stock: 0
    },
    {
        id: '4342',
        product_name: 'Nothing Earbuds One',
        product_thumbnail: 'https://source.unsplash.com/100x100?earphone',
        product_price: '$399.00',
        product_stock: 453
    }
]

const PopularProducts = () => {
    return (
        <div className="bg-white px-4 pt-3  pb-4 rounded-sm border border-gray-200 w-[20rem]">
            <strong>Popular products</strong>
            <div className="mt-4 flex flex-col gap-3">
                {
                    popularProducts.map(product => (
                        <div key={product.id} className="flex gap-3">
                            <div className="h-6 w-6">
                                <img src={product.product_thumbnail} />
                            </div>
                            <div className="text-xs">
                                <h6 className="font-semibold text-gray-700">{product.product_name}</h6>
                                <span>{product.product_price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PopularProducts