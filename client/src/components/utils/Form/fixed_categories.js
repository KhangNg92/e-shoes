const sizes = [
    {
        "_id": 8,
        "name": 8
    },
    {
        "_id": 9,
        "name": 9
    },
    {
        "_id": 10,
        "name": 10
    },
    {
        "_id": 11,
        "name": 11
    },
]

const price = [
    {
        "_id": 0,
        "name": "Any",
        "array": []
    },
    {
        "_id": 1,
        "name": "$0 to $299",
        "array": [0, 299]
    },
    {
        "_id": 2,
        "name": "$300 to $599",
        "array": [300, 599]
    },
    {
        "_id": 3,
        "name": "$600 to $999",
        "array": [600, 999]
    },
    {
        "_id": 4,
        "name": "$1000 to $1999",
        "array": [1000, 1999]
    },
    {
        "_id": 5,
        "name": "More than $2000",
        "array": [2000, 1500000]
    }
]
const gender = [
    {
        "_id": "Male",
        "name": "Male"
    },
    {
        "_id": "Female",
        "name": "Female"
    },
    {
        "_id": "Unisex",
        "name": "Unisex"
    }
]

export {
    sizes,
    price,
    gender
}