const func1 = () => {
    func2();
};
const func2 = () => {
    func3();
};
const func3 = () => { };

func1();
//执行顺序 3->2->1