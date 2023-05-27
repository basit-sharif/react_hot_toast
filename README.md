React-hot-toast

install next js application

(Take a look at react-hot-toas library)[https://react-hot-toast.com/docs]

npm
```terminal
npm install react-hot-toast
```

yarn
```terminal
yarn install react-hot-toast
```


import it 
```typescript
import toast, { Toaster } from 'react-hot-toast';
```

make its function that takes message 
```typescript
const notify = (message:string) => toast(message);
```

use it in tsx :
```typescript
<button onClick={notify}>Make me a toast</button>
<Toaster />
```
make sure that you are in client component beacuse it runs only on client side due to it's funciton that is obviously can called on client side

you can also modify toasted pop up and there are two way one is to modify in function "notify" and second is to modify in component 
```typescript
<Toaster
position="top-center" //spacify position
reverseOrder={false}   //change its order of representing
gutter={8} //spaces between one and second
toastOptions={{
    duration: 3000, //duration
    style: { //some styling
        background: '#363636',
        color: '#fff',
    },
}}
/>
```