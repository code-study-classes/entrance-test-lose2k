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

Hotel.prototype.addRoom = function(room) {
    this.rooms.push(room);
}


Hotel.prototype.getAvailableRooms = function() {
    return this.rooms.filter(room => room.status === 'свободен');
}
const hotel1 = new Hotel("Отель 1", regions["1"]);
const hotel2 = new Hotel("Отель 2", regions["2"]);

for (let i = 1; i <= 10; i++) {
    hotel1.addRoom(new Room(`101-${i}`, 'Стандарт'));
    hotel1.addRoom(new Room(`201-${i}`, 'Люкс'));
    hotel1.addRoom(new Room(`301-${i}`, 'Апартаменты'));
    
    hotel2.addRoom(new Room(`102-${i}`, 'Стандарт'));
    hotel2.addRoom(new Room(`202-${i}`, 'Люкс'));
    hotel2.addRoom(new Room(`302-${i}`, 'Апартаменты'));
}
