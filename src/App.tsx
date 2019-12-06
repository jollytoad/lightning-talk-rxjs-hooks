import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Observable, from, timer, zip } from "rxjs";
import { repeat, map } from "rxjs/operators";


// Some words...

const words = "How to create a custom RxJS React Hook"


// Some RxJS Observables...

const tick$ = timer(1000, 500)

const w$ = from(words.split(' '))

const word$: Observable<string> = zip(w$, tick$).pipe(
    map(([w]) => w),
    repeat()
)


// A React Component...

const App: React.FC = () => {

  const word = 'Hello'

  // const [word, update] = useState<string>('Hello')
  
  // useEffect(() => {
  //   window.setTimeout(() => {
  //     update('Welcome')
  //   }, 3000)
  // }, [])

  // useEffect(() => {
  //   word$.subscribe(update)
  // }, [])

  // const word = useStateObservable(word$, '...');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          {word}
        </h1>
      </header>
    </div>
  )
}


// Custom Hook...

// function useStateObservable<T>(value$: Observable<T>, initValue: T): T {

//   const [value, update] = useState<T>(initValue)

//   useEffect(() => {
//     const subscription = value$.subscribe(update)

//     return () => {
//       subscription.unsubscribe()
//     }
//   }, [value$])

//   return value
// }


export default App;
