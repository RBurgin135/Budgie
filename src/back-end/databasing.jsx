import {getDatabase, ref, set, onValue} from 'firebase/database'



export function setTransaction(userId, ve, am, da, ja='unassigned', ac='unassigned'){
    const db = getDatabase()
    const reference = ref(db, 'users/' + userId)

    set(reference, {
        vendor: ve,
        amount: am,
        date: da,
        jar: ja,
        account: ac
    })
}