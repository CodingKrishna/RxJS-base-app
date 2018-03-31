import { Observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

const jsonString = '{"id":1,"name":"hari"}';
const apiCallRes = Observable.of(jsonString);

apiCallRes
    .map(jsonString => JSON.parse(jsonString))
    .subscribe(obj => {
        console.log(obj.id, obj.name);
    })

const usersString = '[{"id":1,"name":"hari"},{"id":2,"name":"krishna"}]';
const apiUsersRes = Observable.of(usersString);

apiUsersRes
    .map(jsonString => JSON.parse(usersString) )
    .subscribe(users => {
        users.forEach(element => {
            console.log(element);
        });
    })


const names = Observable.of('Coding', 'Krishna');
names
    .do(name => console.log(name) )
    .map(name => name.toUpperCase())
    .do( name => console.log(name))
    .subscribe(name => console.log(name));
    
const numbers = Observable.from([-1,-6,10,50]);
numbers.filter(n => n>0).subscribe(n => console.log(n));

