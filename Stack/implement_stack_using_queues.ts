class MyStack {
    private q1 = [];
    private q2 = [];
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    push(x: number): void {
        this.q1.push(x);
    }

    pop(): number {
        let size = this.q1.length;
        for (let i = 0; i < size - 1; i++) {
            this.q2.push(this.q1.shift());
        }
        let last_element = this.q1.shift();
        this.q1 = this.q2;
        this.q2 = [];
        return last_element;
    }

    top(): number {
        let size = this.q1.length;
        if (this.empty()) {
            for (let i = 0; i < size - 1; i++) {
                this.q2.push(this.q1.shift());
            }
            let last_element = this.q1.shift();
            this.q2.push(last_element);
            this.q1 = this.q2;
            this.q2 = [];
            return last_element;
        }
        return -1;
    }

    empty(): boolean {
        return this.q1.length === 0;
    }
}