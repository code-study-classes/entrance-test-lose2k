import regions from "../bin/regions";

class Hotel {
    constructor(name, region) {
        if (name.length > 150) throw new Error("Название отеля не может превышать 150 символов.");
        this.name = name;
        this.region = region;
        this.rooms = [];
    }
};

class Room {
    constructor(number, category) {
        if (number.length > 10) throw new Error("Номер не может превышать 10 символов.");
        this.number = number;
        this.category = category;
        this.maxGuests = this.getMaxGuests(category);
        this.status = 'свободен';
    }
    getMaxGuests(category) {
        switch (category) {
        case 'Стандарт':
        case 'Люкс':
        return 2;
        case 'Аппартаменты':
        return 4;
        default: 
        throw new Error ('Указанной категории нету.');
        }
    }


togglestatus() {
    this.status = this.status === 'свободен' ? 'занят' : 'свободен'
    }
};