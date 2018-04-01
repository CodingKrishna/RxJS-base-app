import { Observable } from 'rxjs';

/* const myObs = Observable.create( observer =>{
    observer.next('hellow')
    observer.next('World')
})
myObs.subscribe(val =>{
    console.log('Subscriber A', val)
});

myObs.subscribe(val =>{
    console.log('Subscriber B', val)
});
*/


// From one or multiple values
var multiValuesObj = Observable.of('foo', 'bar', [1,2,3], 24, true, {name: 'codingkrishna'});
multiValuesObj.subscribe((val)=>{
    console.log(val)
});


// async values generation.
var myObservable = Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
});
myObservable.subscribe(value => console.log(value));


// From array of values
var arrayOfValues = Observable.from([1,2,3]);
arrayOfValues.subscribe((val)=> {
    console.log(val)
})

const promise = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('promise resolved!');
    }, 1000);
})
/* promise.then(function(val){
    console.log(val);
}) */

const obsProm = Observable.fromPromise(promise);
obsProm.subscribe((val)=>{
    console.log(val);
})
const timerObs = Observable.timer(1000);
timerObs.subscribe((done) => {
    console.log('timer is done')
});

const intervalObs = Observable.interval(1000);
intervalObs.subscribe(interval =>{
    console.log('interval cycle');
})


