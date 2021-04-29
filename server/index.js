const express = require('express')
const app = express();

const flats = [
    {
        "type": "flat",
        id: 1,
        like: false,
        "attributes": {
            "title": "3-х комнатная на Минской",
            "rooms": 3,
            "address": {
                "city": "Tyumen",
                "street": "Минская",
                "house": "3a",
                "room": "123"
            },
            "area": 134,
            "unit": "квм"
        },
        "relationships": {
            "type": "agent",
            "id": 2,
            "attributes": {
                "first_name": "Василий",
                "last_name": "Дроздов",
                "middle_name": "Михайлович"
            }
        }
    },
    {
        "type": "flat",
        id: 2,
        like: false,
        "attributes": {
            "title": "1 комнатная на Барабаинской",
            "rooms": 2,
            "address": {
                "city": "Tyumen",
                "street": "Барабинская",
                "house": "12",
                "room": "45"
            },
            "area": 34,
            "unit": "квм"
        },
        "relationships": {
            "type": "agent",
            "id": 10,
            "attributes": {
                "first_name": "Михаил",
                "last_name": "Иванов",
                "middle_name": "Демидович"
            }
        }
    },
    {
        "type": "flat",
        id: 3,
        like: true,
        "attributes": {
            "title": "Квартира Ленина",
            "rooms": 4,
            "address": {
                "city": "Tyumen",
                "street": "Ленина",
                "house": "134",
                "room": "24"
            },
            "area": 134,
            "unit": "квм"
        },
        "relationships": {
            "type": "agent",
            "id": 44,
            "attributes": {
                "first_name": "Степан",
                "last_name": "Карачаев",
                "middle_name": "Иванович"
            }
        }
    }
]

app.get('/api/flats', function (req, res) {
    return res.status(200).json(flats);
});

app.put('/api/flats/:id', (req, res) => {
    const flat = flats.find(flat => flat.id == req.params.id)
    flat.like = !flat.like
    res.json()
})

app.listen(5000, console.log('Server port 5000 run........'))