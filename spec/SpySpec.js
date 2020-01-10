describe("Dùng spy", function() {
    let person, eaten = null;

    // Hàm này được chạy đầu mỗi test case
    beforeEach(() => {
        person = {
            eat: (value) => {
                eaten = value;
            }
        };

        // Gắn spy vào để theo dõi hàm eat của object person
        spyOn(person, 'eat').and.callThrough();
        person.eat('apple');

    });
    
    it("Tracks that the spy was called", () => {
        expect(person.eat).toHaveBeenCalled();
    });

    it("Tracks all the arguments of its calls", () => {
        expect(person.eat).toHaveBeenCalledWith('apple');
    });

    // it("Stops all execution on a function", () => {
    //     // Spy sẽ chặn hàm eat, do đó giá trị eaten không được set
    //     expect(eaten).toBeNull();
    // });

    it("Not stop execution on a function", () => {
        // Spy không chặn hàm eat nữa
        expect(eaten).toBe('apple');
    });
});

describe("Dùng spy để tạo module giả (mock)", () => {
    let person, eaten = null;

    beforeEach(() => {
        person = {
            eat: () => {
                eaten = value;
            },
            foodEaten: () => {
                // Viết chưa xong
            }
        };

        // Spy sẽ làm mock
        // Giả kết quả trả về của hàm foodEaten
        spyOn(person, 'foodEaten').and.callFake(() => 'banana');
    });

    it("Stops all execution on a function", () => {
        expect(person.foodEaten()).toBe('banana');
    });
});