const { Observable } = require('rxjs');

var data = new Observable(observer => {
    setTimeout(() => {
        observer.next(42);
    }, 1000);

    setTimeout(() => {
        observer.next(43);
        // observer.error(new Error('Something bad happened!'));
    }, 2000);

    setTimeout(() => {
        observer.complete();
    }, 3000)
});

data.subscribe(val => {
    console.log(val)
},
err =>{
    console.log(err);
} , 
() => {
    console.log('fineshed..')
});

// unsubscribe

var datastream = new Observable(observer => {
    setTimeout(() => {
        observer.next('You will never see this message');
    }, 2000);
});

let subscription = datastream.subscribe(
    value => console.log(value),
    error => console.log(error),
    () => console.log( 'Finished')
);

setTimeout(() => {
  subscription.unsubscribe();
}, 1000);

