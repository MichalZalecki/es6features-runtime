describe("Promises", () => {

    class Stepper {
        constructor() {
            this.steps = 0;
        }
        step(n = 1) {
            this.steps += n;
            return this;
        }
    }

    function stepPromise(stepper) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                //console.log(stepper);
                if (stepper.steps < 10000) {
                    resolve(stepper);
                } else {
                    reject(new Error("OKAAAYYY! That's enough now."));
                }
            }, 100);
        });
    }

    function firstPromise(...promises) {
        return Promise.race(promises);
    }

    function waitForLastPromise(...promises) {
        return Promise.all(promises);
    }

    let stepper;
    beforeEach(() => {
        stepper = new Stepper();
    });

    it("should be resolved asynchronously", (done) => {
        let msg;
        Promise.resolve("Resolved!").then((m) => {
            msg = m;
            expect(msg).toEqual("Resolved!");
            done();
        });
        expect(msg).toBeUndefined();
    });

    it("should be rejected asynchronously", (done) => {
        let msg;
        Promise.reject(new Error("Rejected!")).then(() => {}, (err) => {
            msg = err.message;
            expect(msg).toEqual("Rejected!");
            done();
        });
        expect(msg).toBeUndefined();
    });

    it("should be resolved", (done) => {
        stepPromise(stepper.step())
            .then((stepper) => {
                expect(stepper.steps).toEqual(1);
                done();
            });
    });

    it("should be resolved and then chained", (done) => {
        stepPromise(stepper.step())
            .then((stepper) => stepPromise(stepper.step()))
            .then((stepper) => stepPromise(stepper.step(2)))
            .then((stepper) => stepPromise(stepper.step()))
            .then((stepper) => stepPromise(stepper.step(3)))
            .then((stepper) => stepPromise(stepper.step()))
            .then((stepper) => {
                expect(stepper.steps).toEqual(9);
                done();
            });
    });

    it("should be rejected and handled by then", (done) => {
        stepPromise(stepper.step(9999))
            .then((stepper) => stepPromise(stepper.step()))
            .then(() => {}, (err) => {
                expect(err).toEqual(new Error("OKAAAYYY! That's enough now."));
                done();
            });
    });

    it("should be rejected and handled by catch", (done) => {
        stepPromise(stepper.step(9999))
            .then((stepper) => stepPromise(stepper.step()))
            .catch((err) => {
                expect(err).toEqual(new Error("OKAAAYYY! That's enough now."));
                done();
            });
    });

    it("should be resolved on first promise resolve", (done) => {
        let promise100 = new Promise((resolve) => {
            setTimeout(() => { resolve(100)} );
        }, 100);
        let promise200 = new Promise((resolve) => {
            setTimeout(() => { resolve(200)} );
        }, 200);
        let promise300 = new Promise((resolve) => {
            setTimeout(() => { resolve(300)} );
        }, 300);

        firstPromise(promise100, promise200, promise300)
            .then((value) => {
                expect(value).toEqual(100);
                done();
            });
    });

    it("should be resolved on last promise resolve", (done) => {
        let promise100 = new Promise((resolve) => {
            setTimeout(() => { resolve(100)} );
        }, 100);
        let promise200 = new Promise((resolve) => {
            setTimeout(() => { resolve(200)} );
        }, 200);
        let promise300 = new Promise((resolve) => {
            setTimeout(() => { resolve(300)} );
        }, 300);

        waitForLastPromise(promise100, promise300, promise200)
            .then((value) => {
                expect(value).toEqual([100, 300, 200]);
                done();
            });
    });
});
