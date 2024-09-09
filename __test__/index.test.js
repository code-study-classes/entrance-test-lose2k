// @ts-check

function test() {
    console.log("Начало тестирования...");

    
    const roomToTest = hotel1.rooms[0]; 
    roomToTest.toggleStatus();
    console.assert(roomToTest.status === 'занят', "Ошибка: статус не изменился на 'занят'.");

    roomToTest.toggleStatus();
    console.assert(roomToTest.status === 'свободен', "Ошибка: статус не изменился на 'свободен'.");


    const availableRooms = hotel1.getAvailableRooms();
    console.assert(availableRooms.length === 30, "Ошибка: количество свободных номеров не совпадает.");


    roomToTest.toggleStatus();
    const newAvailableRooms = hotel1.getAvailableRooms();
    console.assert(newAvailableRooms.length === 29, "Ошибка: количество свободных номеров не совпадает после изменения статуса.");

    console.log("Все тесты пройдены успешно!");
}

test();